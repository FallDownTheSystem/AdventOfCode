import itertools

# Operation Codes
ADD = 1
MULTIPLY = 2
INPUT = 3
OUTPUT = 4
JUMP_IF_TRUE = 5
JUMP_IF_FALSE = 6
LESS_THAN = 7
EQUALS = 8
HALT = 99

# Return Codes
HALTED = -1
WAITING_FOR_INPUT = -2


class Instruction:
    def __init__(self, instruction):
        self.opcode = instruction % 100
        self.pmm1 = instruction // 100 % 10
        self.pmm2 = instruction // 1000 % 10
        self.pmm3 = instruction // 10000 % 10


class CPU:
    def __init__(self, memory: list, inputs: list):
        self.memory = memory
        self.ip = 0
        self.input_device = inputs
        self.output_device = None
        self.return_code = None

    def viewMemory(self):
        memoryAsStr = ""
        padding = len(str(max([abs(x) for x in self.memory]))) + 1
        for i, x in enumerate(self.memory):
            if i % 4 == 0:
                memoryAsStr += f"{i}:\t"
            memoryAsStr += f"{x: {padding}}"
            if (i + 1) % 4 == 0:
                memoryAsStr += "\n"
        return memoryAsStr

    def fetch(self):
        instruction = self.memory[self.ip]
        self.ip += 1
        return instruction

    def execute(self, instruction: int):
        # Decode instruction here
        instr = Instruction(instruction)
        if instr.opcode == ADD:
            a = self.fetch()
            val_a = a if instr.pmm1 else self.memory[a]

            b = self.fetch()
            val_b = b if instr.pmm2 else self.memory[b]

            address = self.fetch()
            self.memory[address] = val_a + val_b
            return
        elif instr.opcode == MULTIPLY:
            a = self.fetch()
            val_a = a if instr.pmm1 else self.memory[a]

            b = self.fetch()
            val_b = b if instr.pmm2 else self.memory[b]

            address = self.fetch()
            self.memory[address] = val_a * val_b
            return
        elif instr.opcode == INPUT:
            if len(self.input_device) == 0:
                self.ip -= 1
                return WAITING_FOR_INPUT
            address = self.fetch()
            self.memory[address] = self.input_device.pop(0)
            return
        elif instr.opcode == OUTPUT:
            a = self.fetch()
            val_a = a if instr.pmm1 else self.memory[a]
            self.output_device = val_a
            return
        elif instr.opcode == JUMP_IF_TRUE:
            a = self.fetch()
            val_a = a if instr.pmm1 else self.memory[a]

            b = self.fetch()
            val_b = b if instr.pmm2 else self.memory[b]

            if val_a != 0:
                self.ip = val_b
            return
        elif instr.opcode == JUMP_IF_FALSE:
            a = self.fetch()
            val_a = a if instr.pmm1 else self.memory[a]

            b = self.fetch()
            val_b = b if instr.pmm2 else self.memory[b]

            if val_a == 0:
                self.ip = val_b
            return
        elif instr.opcode == LESS_THAN:
            a = self.fetch()
            val_a = a if instr.pmm1 else self.memory[a]

            b = self.fetch()
            val_b = b if instr.pmm2 else self.memory[b]

            address = self.fetch()

            if val_a < val_b:
                self.memory[address] = 1
            else:
                self.memory[address] = 0
            return
        elif instr.opcode == EQUALS:
            a = self.fetch()
            val_a = a if instr.pmm1 else self.memory[a]

            b = self.fetch()
            val_b = b if instr.pmm2 else self.memory[b]

            address = self.fetch()

            if val_a == val_b:
                self.memory[address] = 1
            else:
                self.memory[address] = 0
            return
        elif instr.opcode == HALT:
            return HALTED

    def step(self):
        instruction = self.fetch()
        self.return_code = self.execute(instruction)
        return self.return_code


def compute(cpu: CPU):
    running = True
    while running:
        ret_code = cpu.step()
        running = ret_code is None
    return cpu


def max_thruster_signal(memory):
    phaser_sequences = list(itertools.permutations([0, 1, 2, 3, 4]))
    outputs = []
    for sequence in phaser_sequences:
        output = 0
        for phaser_input in sequence:
            cpu = CPU(memory[:], [phaser_input, output])
            output = compute(cpu).output_device
        outputs.append(output)
    return max(outputs)


print("==================== Part 1 ====================")
puzzle_input = open("2019/day7/input.txt", "r").read().rstrip()
memory = [int(x) for x in puzzle_input.split(",")]
print("Max thruster signal:", max_thruster_signal(memory))


def feedback_loop(memory):
    phaser_sequences = list(itertools.permutations([5, 6, 7, 8, 9]))
    thruster_outputs = []
    for sequence in phaser_sequences:
        phasers = []
        for phaser_input in sequence:
            cpu = CPU(memory[:], [phaser_input])
            phasers.append(cpu)
        phasers[0].input_device.append(0)
        index = 0
        while True:
            curr_index = index % len(phasers)
            next_index = (index + 1) % len(phasers)
            cpu = phasers[curr_index]
            cpu = compute(cpu)
            index += 1
            if cpu.return_code == WAITING_FOR_INPUT or (cpu.return_code == HALTED and curr_index != len(phasers) - 1):
                phasers[next_index].input_device.append(cpu.output_device)
            elif (curr_index == len(phasers) - 1) and cpu.return_code == HALTED:
                thruster_outputs.append(cpu.output_device)
                break

    return max(thruster_outputs)


print("==================== Part 2 ====================")
print("Max thruster signal from feedback loop:", feedback_loop(memory))
