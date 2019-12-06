import unittest
import day4


class TestSolutions(unittest.TestCase):
    def test_part1(self):
        self.assertEqual(len(day4.part1(111111, 111111)), 1)
        self.assertEqual(len(day4.part1(223450, 223450)), 0)
        self.assertEqual(len(day4.part1(123789, 123789)), 0)

    def test_part2(self):
        self.assertEqual(len(day4.part2([112233])), 1)
        self.assertEqual(len(day4.part2([123444])), 0)
        self.assertEqual(len(day4.part2([111122])), 1)


if __name__ == "__main__":
    unittest.main()
