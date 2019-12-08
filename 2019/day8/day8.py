print("==================== Part 1 ====================")
puzzle_input = open("2019/day8/input.txt", "r").read().rstrip()
width = 25
height = 6
size = width * height

layer_data = list(puzzle_input)
layers = []
for i in range(0, len(layer_data), size):
    layers.append(layer_data[i:i + size])

min_zeroes = 999
min_index = 0
for index, layer in enumerate(layers):
    zeroes = len(list(filter(lambda x: x == 0, layer)))
    if zeroes < min_zeroes:
        min_zeroes = zeroes
        min_index = index

ones = len(list(filter(lambda x: x == 1, layers[min_index])))
twos = len(list(filter(lambda x: x == 2, layers[min_index])))

print("Ones * Twos:", ones * twos)

print("==================== Part 2 ====================")
pixel_map = {'0': ' ', '1': '#'}

image = ['2'] * size
layers.reverse()
for layer in layers:
    for i, x in enumerate(layer):
        if x != '2':
            image[i] = x

for i, x in enumerate(image):
    if i % width == 0:
        print()
    print(pixel_map[x], end='')
