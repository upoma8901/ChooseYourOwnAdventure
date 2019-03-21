// NOTE - You must have a level with the name "start".  This is used as the first level in the game.

var game = {
    music: "98_Lost_Mine.mp3",
    background_image: "intro-bg.jpg",
    levels: {

        start: {
            message: "You are lost at barren land and have no signal as there is a storm in your location and there is no way home. Where do you go?",
            choices: [
                {
                    text: "You decide to visit the nearby barn to ask for direction",
                    nextLevel: "Aproaching",
                },

                {
                    text: "Be inside your car until the sun comes out",
                    nextLevel: "Faith",
                },
            ]
        },

        Aproaching: {
            background_image: "fire.gif",
            music: "Final-Fantasy-7-Boss-Battle.mp3",
            message: "You are greeted by old lady",
            choices: [
                {
                    text: "Stay over ",
                    nextLevel: "start",
                },
            ]
        },

        field: {
            message: "You eventually die as you turn out your gps has been hacked which brought you here by a serial killer. You have fallen asleep in you car when your were gased out and died",
            choices: [
                {
                    text: "Start over",
                    nextLevel: "start",
                },
            ]
        },

    }
};
