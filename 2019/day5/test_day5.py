import unittest
import day5


class TestDay5(unittest.TestCase):
    def test_part1(self):
        self.assertEqual(day5.compute("3,0,4,0,99", 420).output_device, 420)

    def test_part2(self):
        self.assertEqual(day5.compute("3,9,8,9,10,9,4,9,99,-1,8", 8).output_device, 1)
        self.assertEqual(day5.compute("3,9,7,9,10,9,4,9,99,-1,8", 4).output_device, 1)
        self.assertEqual(day5.compute("3,3,1108,-1,8,3,4,3,99", 8).output_device, 1)
        self.assertEqual(
            day5.compute("3,12,6,12,15,1,13,14,13,4,13,99,-1,0,1,9", 0).output_device,
            0,
        )
        self.assertEqual(
            day5.compute("3,3,1105,-1,9,1101,0,0,12,4,12,99,1", 69).output_device, 1
        )
        self.assertEqual(
            day5.compute(
                "3,21,1008,21,8,20,1005,20,22,107,8,21,20,1006,20,31,1106,0,36,98,0,0,1002,21,125,20,4,20,1105,1,46,104,999,1105,1,46,1101,1000,1,20,4,20,1105,1,46,98,99",
                7,
            ).output_device,
            999,
        )
        self.assertEqual(
            day5.compute(
                "3,21,1008,21,8,20,1005,20,22,107,8,21,20,1006,20,31,1106,0,36,98,0,0,1002,21,125,20,4,20,1105,1,46,104,999,1105,1,46,1101,1000,1,20,4,20,1105,1,46,98,99",
                8,
            ).output_device,
            1000,
        )
        self.assertEqual(
            day5.compute(
                "3,21,1008,21,8,20,1005,20,22,107,8,21,20,1006,20,31,1106,0,36,98,0,0,1002,21,125,20,4,20,1105,1,46,104,999,1105,1,46,1101,1000,1,20,4,20,1105,1,46,98,99",
                9,
            ).output_device,
            1001,
        )


if __name__ == "__main__":
    unittest.main()
