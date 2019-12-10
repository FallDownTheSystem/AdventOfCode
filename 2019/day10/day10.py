from math import atan2, pi, sqrt
from collections import namedtuple, defaultdict
Asteroid = namedtuple('Asteroid', ['x', 'y', 'distance', 'angle'])


def angle(a, b):
    theta = atan2(b[0] - a[0], b[1] - a[1])
    return theta * 180 / pi


def distance(a, b):
    dist = sqrt((b[0] - a[0])**2 + (b[1] - a[1])**2)
    return dist


def most_visible_points(points):
    most_visible = 0
    station = None
    for point in points:
        angles = set()
        for target in points:
            if target == point:
                continue
            theta = angle(point, target)
            angles.add(theta)
        visible = len(angles)
        if visible > most_visible:
            most_visible = visible
            station = point
    return most_visible, station


def visible_asteroids(asteroids):
    '''
    Returns all visible asteroids.
    If there are multiple asteroids with the same angles, the closest one is returned.
    '''
    grouped = defaultdict(list)
    for a in asteroids:
        grouped[a.angle].append(a)
        grouped[a.angle] = sorted(grouped[a.angle], key=lambda x: x.distance)
    return list(map(lambda x: x[0], grouped.values()))


def mr_destructoid(points, station):
    destroyed = 0
    # Generate asteroids
    asteroids = []
    for target in points:
        if target == station:
            continue
        theta = angle(station, target)
        dist = distance(station, target)
        asteroids.append(Asteroid(target[0], target[1], dist, theta))
    # Sort asteroids by angle, so we can traverse them 'clockwise'
    asteroids = sorted(asteroids, key=lambda x: x.angle, reverse=True)
    visible = [1]
    while len(visible) != 0:
        visible = visible_asteroids(asteroids)
        for v in visible:
            asteroids.remove(v)
            destroyed += 1
            if (destroyed == 200):
                return v


if __name__ == '__main__':
    puzzle_input = open("2019/day10/input.txt", "r").read().rstrip()
    data = puzzle_input.split("\n")
    points = []
    for y, row in enumerate(data):
        for x, cell in enumerate(row):
            if cell == '#':
                points.append((x, y))
    print("==================== Part 1 ====================")
    visible, station = most_visible_points(points)
    print(f'{visible} at {station}')
    print("==================== Part 2 ====================")
    the_chosen_one = mr_destructoid(points, station)
    print(the_chosen_one.x * 100 + the_chosen_one.y)
