class Moon():
    def __init__(self, pos, vel=(0, 0, 0)):
        self.pos_x, self.pos_y, self.pos_z = pos
        self.vel_x, self.vel_y, self.vel_z = vel

    @property
    def position(self):
        return (self.pos_x, self.pos_y, self.pos_z)

    @position.setter
    def position(self, pos):
        self.pos_x, self.pos_y, self.pos_z = pos

    @property
    def velocity(self):
        return (self.vel_x, self.vel_y, self.vel_z)

    @velocity.setter
    def velocity(self, vel):
        self.vel_x, self.vel_y, self.vel_z = vel


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
    for moon in moons:
        for target in moons:
            if moon == target:
                continue
            if moon.pos_x < target.pos_x:
                moon.vel_x += 1
            elif moon.pos_x > target.pos_x:
                moon.vel_x -= 1

            if moon.pos_y < target.pos_y:
                moon.vel_y += 1
            elif moon.pos_y > target.pos_y:
                moon.vel_y -= 1

            if moon.pos_z < target.pos_z:
                moon.vel_z += 1
            elif moon.pos_z > target.pos_z:
                moon.vel_z -= 1
        print(moon.velocity)
