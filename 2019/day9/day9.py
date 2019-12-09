# Operation Codes
ADD = 1
MULTIPLY = 2
INPUT = 3
OUTPUT = 4
JUMP_IF_TRUE = 5
JUMP_IF_FALSE = 6
LESS_THAN = 7
EQUALS = 8
OFFSET = 9
HALT = 99

# Return Codes
SUCCESS = 0
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
        self.offset = 0
        self.input_device = inputs
        self.output_device = []
        self.return_code = SUCCESS

    def viewMemory(self):
        memory_row = ""
        padding = len(str(max([abs(x) for x in self.memory]))) + 1
        for i, x in enumerate(self.memory):
            if i % 4 == 0:
                memory_row += f"{i}:\t"
            memory_row += f"{x: {padding}}"
            if (i + 1) % 4 == 0:
                memory_row += "\n"
        return memory_row

    def fetch(self):
        instruction = self.memory[self.ip]
        self.ip += 1
        return instruction

    def mode(self, parameter_mode, val, read=True):
        if parameter_mode == 0:
            return self.memory[val] if read else val
        elif parameter_mode == 1:
            if read:
                return val
            else:
                raise Exception("Cannot use parameter mode 1 when writing.")
        elif parameter_mode == 2:
            return self.memory[self.offset + val] if read else self.offset + val

    def execute(self, instruction: int):
        # Decode instruction here
        instr = Instruction(instruction)
        if instr.opcode == ADD:
            a = self.mode(instr.pmm1, self.fetch())
            b = self.mode(instr.pmm2, self.fetch())
            address = self.mode(instr.pmm3, self.fetch(), False)
            self.memory[address] = a + b
            return SUCCESS

        elif instr.opcode == MULTIPLY:
            a = self.mode(instr.pmm1, self.fetch())
            b = self.mode(instr.pmm2, self.fetch())
            address = self.mode(instr.pmm3, self.fetch(), False)
            self.memory[address] = a * b
            return SUCCESS

        elif instr.opcode == INPUT:
            if len(self.input_device) == 0:
                self.ip -= 1
                return WAITING_FOR_INPUT
            address = self.mode(instr.pmm1, self.fetch(), False)
            self.memory[address] = self.input_device.pop(0)
            return SUCCESS

        elif instr.opcode == OUTPUT:
            a = self.mode(instr.pmm1, self.fetch())
            self.output_device.append(a)
            return SUCCESS

        elif instr.opcode == JUMP_IF_TRUE:
            a = self.mode(instr.pmm1, self.fetch())
            b = self.mode(instr.pmm2, self.fetch())
            if a != 0:
                self.ip = b
            return SUCCESS

        elif instr.opcode == JUMP_IF_FALSE:
            a = self.mode(instr.pmm1, self.fetch())
            b = self.mode(instr.pmm2, self.fetch())
            if a == 0:
                self.ip = b
            return SUCCESS

        elif instr.opcode == LESS_THAN:
            a = self.mode(instr.pmm1, self.fetch())
            b = self.mode(instr.pmm2, self.fetch())
            address = self.mode(instr.pmm3, self.fetch(), False)
            if a < b:
                self.memory[address] = 1
            else:
                self.memory[address] = 0
            return SUCCESS

        elif instr.opcode == EQUALS:
            a = self.mode(instr.pmm1, self.fetch())
            b = self.mode(instr.pmm2, self.fetch())
            address = self.mode(instr.pmm3, self.fetch(), False)
            if a == b:
                self.memory[address] = 1
            else:
                self.memory[address] = 0
            return SUCCESS

        elif instr.opcode == OFFSET:
            a = self.mode(instr.pmm1, self.fetch())
            self.offset += a
            return SUCCESS

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
        running = ret_code == SUCCESS
    return cpu


def BOOST(memory, mode):
    cpu = CPU(memory, mode)
    compute(cpu)
    return cpu.output_device


print("==================== Part 1 ====================")
puzzle_input = open("2019/day9/input.txt", "r").read().rstrip()
memory = [int(x) for x in puzzle_input.split(",")]
memory.extend([0] * 50000000)
print(BOOST(memory[:], [1]))

print("==================== Part 2 ====================")
print(BOOST(memory[:], [2]))
