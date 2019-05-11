# HW4-Unit-4-Crystal Collector

## Introduction
This game was created for the fourth homework of NU Bootcamp. The instructions were to create randomized number generator for each crystal, then would add up upon click to match the main randomized number.

## Problems
A few problems encountered were:
* How to generate 4 different randomized numbers for each crystal
    * Solved this issue by creating a loop that pushed a randomized numbered into an array 4 times. Then each crystal was assigned a different index of that array.
* How to have the crystals maintin the same randomize number until reset
    * Created an isolated function for the crystal number randomizer that was only called once the results matched the main randomized number or if the results exceeded the main randomized number.



## Instructions
You will be given a random number at the start of the game.
There are four crystals. By clicking on a crystal, you will add a specific amount of points to your total score.
You win the game by matching your total score to the random number. You lose the game if your total score goes about the random number.
The value of each crystal is hidden from you until you click on it.
Each time when the game starts, the game will change the value of each crystal.

## Website
https://dr-wyatt.github.io/HW4-Unit-4-Game/

