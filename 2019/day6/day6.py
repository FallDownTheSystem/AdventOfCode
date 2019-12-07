def count_orbits(tree, node, depth, orbits):
    depth += 1
    for child in node:
        orbits += depth
        if child in tree:
            orbits = count_orbits(tree, tree[child], depth, orbits)
    return orbits


print("==================== Part 1 ====================")
puzzle_input = open("2019/day6/input.txt", "r").read().rstrip()
edges = [x.split(")") for x in puzzle_input.split("\n")]
tree = {}
for parent, child in edges:
    tree.setdefault(parent, []).append(child)
orbits = count_orbits(tree, tree["COM"], 0, 0)
print(orbits)


def get_ancestors(tree, node, ancestors):
    for parent in node:
        ancestors.append(parent)
        if parent in tree:
            get_ancestors(tree, tree[parent], ancestors)
    return ancestors


def count_links(tree, start, destination):
    source = get_ancestors(tree, tree[start], [])
    target = get_ancestors(tree, tree[destination], [])
    for parent in source:
        if parent in target:
            links = source.index(parent) + target.index(parent)
            return links


print("==================== Part 2 ====================")
reverse_tree = {}
for parent, child in edges:
    reverse_tree.setdefault(child, []).append(parent)

orbital_transfers = count_links(reverse_tree, "YOU", "SAN")
print(orbital_transfers)
