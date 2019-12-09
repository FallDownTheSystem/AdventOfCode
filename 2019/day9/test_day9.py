import unittest
import day9


class TestDay9(unittest.TestCase):
    def test_part1(self):
        memory = [109, 1, 204, -1, 1001, 100, 1, 100, 1008, 100, 16, 101, 1006, 101, 0, 99]
        memory.extend([0] * 500)
        self.assertEqual(day9.BOOST(memory, []), [109, 1, 204, -1, 1001,
                                                  100, 1, 100, 1008, 100, 16, 101, 1006, 101, 0, 99])

        self.assertEqual(day9.BOOST([1102, 34915192, 34915192, 7, 4, 7, 99, 0], []), [1219070632396864])

        self.assertEqual(day9.BOOST([104, 1125899906842624, 99], []), [1125899906842624])


if __name__ == "__main__":
    unittest.main()
