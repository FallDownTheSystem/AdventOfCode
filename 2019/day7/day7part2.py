import itertools

ADD = 1
MULTIPLY = 2
INPUT = 3
OUTPUT = 4
JUMP_IF_TRUE = 5
JUMP_IF_FALSE = 6
LESS_THAN = 7
EQUALS = 8
HALT = 99


class Instruction:
    def __init__(self, instruction):
        self.opcode = instruction % 100
        self.pmm1 = instruction // 100 % 10
        self.pmm2 = instruction // 1000 % 10
        self.pmm3 = instruction // 10000 % 10


class CPU:
    def __init__(self, memory: list, inputs: list, sequence: list):
        self.memory = memory
        self.ip = 0
        self.input_sequence = sequence
        self.input_counter = 0
        self.sequence_length = len(sequence)
        self.input_device = inputs
        self.output_device = None

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
            address = self.fetch()
            if len(self.input_device) == 0:
                self.memory[address] = self.input_sequence[self.input_counter % self.sequence_length]
                self.input_counter += 1
                return
            self.memory[address] = self.input_device.pop()
            return
        elif instr.opcode == OUTPUT:
            a = self.fetch()
            val_a = a if instr.pmm1 else self.memory[a]
            self.output_device = val_a
            self.input_device.append(val_a)
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
            return -1

    def step(self):
        instruction = self.fetch()
        return self.execute(instruction)


def compute(int_code: str, inputs: list, sequence: list):
    memory = [int(x) for x in int_code.split(",")]
    cpu = CPU(memory, inputs, sequence)
    running = True
    while running:
        running = cpu.step() != -1
    return cpu


def max_thruster_signal(puzzle_input):
    phaser_sequences = list(itertools.permutations([0, 1, 2, 3, 4]))
    outputs = []
    for sequence in phaser_sequences:
        output = 0
        for phaser_input in sequence:
            output = compute(puzzle_input, [output, phaser_input], []).output_device
        outputs.append(output)
    return max(outputs)


print("==================== Part 1 ====================")
puzzle_input = open("2019/day7/input.txt", "r").read().rstrip()
print("Max thruster signal:", max_thruster_signal(puzzle_input))


# print("==================== Part 2 ====================")


# def feedback_loop(puzzle_input):
#     phaser_sequences = list(itertools.permutations([5, 6, 7, 8, 9]))
#     outputs = []
#     for sequence in phaser_sequences:
#         output = 0
#         cpu = compute(puzzle_input, [output], sequence)
#         outputs.append(cpu.output_device)
#     return max(outputs)


# print("Max thruster after feedback loop:", feedback_loop(puzzle_input))
