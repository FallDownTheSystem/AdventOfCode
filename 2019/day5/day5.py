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
    def __init__(self, memory: list, input_val: int):
        self.memory = memory
        self.ip = 0
        self.input_device = input_val
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
            self.memory[address] = self.input_device
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
            return -1

    def step(self):
        instruction = self.fetch()
        return self.execute(instruction)


def compute(int_code: str, input_val: int):
    memory = [int(x) for x in int_code.split(",")]
    cpu = CPU(memory, input_val)
    running = True
    while running:
        running = cpu.step() != -1
    return cpu


if __name__ == '__main__':
    print("==================== Part 1 ====================")
    puzzle_input = open("2019/day5/input.txt", "r").read().rstrip()
    cpu = compute(puzzle_input, 1)
    # print(cpu.viewMemory())
    print("Input: ", cpu.input_device)
    print("Output: ", cpu.output_device)

    print("==================== Part 2 ====================")
    cpu = compute(puzzle_input, 5)
    # print(cpu.viewMemory())
    print("Input: ", cpu.input_device)
    print("Output: ", cpu.output_device)
