from math import gcd


class Moon():
    def __init__(self, pos, vel=(0, 0, 0)):
        self.pos_x, self.pos_y, self.pos_z = pos
        self.vel_x, self.vel_y, self.vel_z = vel

    @property
    def position(self):
        return (self.pos_x, self.pos_y, self.pos_z)

    @property
    def velocity(self):
        return (self.vel_x, self.vel_y, self.vel_z)

    def update_position(self):
        self.pos_x += self.vel_x
        self.pos_y += self.vel_y
        self.pos_z += self.vel_z

    def energy(self):
        potential_energy = abs(self.pos_x) + abs(self.pos_y) + abs(self.pos_z)
        kinetic_energy = abs(self.vel_x) + abs(self.vel_y) + abs(self.vel_z)
        return potential_energy * kinetic_energy

    def plane(self, index):
        return str(self.position[index]) + str(self.velocity[index])

    def apply_gravity(self, target):
        if self.pos_x < target.pos_x:
            self.vel_x += 1
        elif self.pos_x > target.pos_x:
            self.vel_x -= 1

        if self.pos_y < target.pos_y:
            self.vel_y += 1
        elif self.pos_y > target.pos_y:
            self.vel_y -= 1

        if self.pos_z < target.pos_z:
            self.vel_z += 1
        elif self.pos_z > target.pos_z:
            self.vel_z -= 1


def gravitate(moons):
    for moon in moons:
        for target in moons:
            if moon == target:
                continue
            moon.apply_gravity(target)


def simulate(moons):
    for i in range(1000):
        gravitate(moons)
        for moon in moons:
            moon.update_position()
    return moons


def cyclic(moons):
    steps = []
    step = 0
    seenX = set()
    seenY = set()
    seenZ = set()
    foundX = False
    foundY = False
    foundZ = False
    while True:
        x = y = z = ''
        gravitate(moons)
        for moon in moons:
            moon.update_position()
            x += moon.plane(0)
            y += moon.plane(1)
            z += moon.plane(2)
        # Check if the plane has been in this position before
        if not foundX:
            if x in seenX:
                steps.append(step)
                foundX = True
            else:
                seenX.add(x)
        if not foundY:
            if y in seenY:
                steps.append(step)
                foundY = True
            else:
                seenY.add(y)
        if not foundZ:
            if z in seenZ:
                steps.append(step)
                foundZ = True
            else:
                seenZ.add(z)

        if foundX and foundY and foundZ:
            break
        step += 1
    return steps


def lcm(a, b):
    return abs(a * b) // gcd(a, b)


if __name__ == '__main__':
    puzzle_input = open("2019/day12/input.txt", "r").read().rstrip()
    moons_data = puzzle_input.split("\n")
    moons = []
    for moon in moons_data:
        coords = []
        for coord_chars in moon.split(','):
            p = [char for char in coord_chars if char.isdigit() or char == '-']
            coords.append(int("".join(p)))
        moons.append(Moon(tuple(coords)))

    print("==================== Part 1 ====================")
    part1 = simulate(moons[:])
    total_energy = 0
    for moon in part1:
        total_energy += moon.energy()
    print(total_energy)

    print("==================== Part 2 ====================")
    steps = cyclic(moons[:])
    print(lcm(steps[0], lcm(steps[1], steps[2])))
