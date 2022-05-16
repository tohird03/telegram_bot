require("dotenv").config()
const TelegramBot = require("node-telegram-bot-api")
const { read, write } = require("./utils/FS")

const bot = new TelegramBot(process.env.API_KEY, {
    polling: true
})

bot.onText(/\/start/, (msg) => {

    const user = read("user.json")
    if(msg.chat.username){
        if(!user.includes(`@${msg.chat.username}`)){
            bot.sendMessage(msg.chat.id, `Salom ${msg.chat.first_name} mening portfolio botimga hush kelibsiz`, {
                reply_markup: JSON.stringify({
                    keyboard: [
                        [
                            {
                                text: "Men haqimda"
                            },
                            {
                                text: "Mening ko'nikmalarim"
                            }
                        ],
                        [
                            {
                                text: "Mening amaliy ishlarim"
                            },
                            {
                                text: "Ijtimoiy tarmoqlarim"
                            }
                        ],
                        [
                            {
                                text: "Bot foydalanuvchilari"
                            }
                        ]
                    ],
                    resize_keyboard: true
                })
            })

            user.push(`@${msg.chat.username}`)
            write("user.json", user)
        }else {
            bot.sendMessage(msg.chat.id, `Salom ${msg.chat.first_name} mening portfolio botimga hush kelibsiz`, {
                reply_markup: JSON.stringify({
                    keyboard: [
                        [
                            {
                                text: "Men haqimda"
                            },
                            {
                                text: "Mening ko'nikmalarim"
                            }
                        ],
                        [
                            {
                                text: "Mening amaliy ishlarim"
                            },
                            {
                                text: "Ijtimoiy tarmoqlarim"
                            }
                        ],
                        [
                            {
                                text: "Bot foydalanuvchilari"
                            }
                        ]
                    ],
                    resize_keyboard: true
                })
            })
        }
    }else {
        if(!user.includes(msg.chat.first_name)){
            user.push(msg.chat.first_name)
            write("user.json", user)

            bot.sendMessage(msg.chat.id, `Salom ${msg.chat.first_name} mening portfolio botimga hush kelibsiz`, {
                reply_markup: JSON.stringify({
                    keyboard: [
                        [
                            {
                                text: "Men haqimda"
                            },
                            {
                                text: "Mening ko'nikmalarim"
                            }
                        ],
                        [
                            {
                                text: "Mening amaliy ishlarim"
                            },
                            {
                                text: "Ijtimoiy tarmoqlarim"
                            }
                        ],
                        [
                            {
                                text: "Bot foydalanuvchilari"
                            }
                        ]
                    ],
                    resize_keyboard: true
                })
            })
        }else {
            bot.sendMessage(msg.chat.id, `Salom ${msg.chat.first_name} mening portfolio botimga hush kelibsiz`, {
                reply_markup: JSON.stringify({
                    keyboard: [
                        [
                            {
                                text: "Men haqimda"
                            },
                            {
                                text: "Mening ko'nikmalarim"
                            }
                        ],
                        [
                            {
                                text: "Mening amaliy ishlarim"
                            },
                            {
                                text: "Ijtimoiy tarmoqlarim"
                            }
                        ],
                        [
                            {
                                text: "Bot foydalanuvchilari"
                            }
                        ]
                    ],
                    resize_keyboard: true
                })
            })
        }
    }


})



bot.on("message", (msg) => {
    const chatId = msg.chat.id
    const user = read("user.json")

    if(msg.text == "Men haqimda"){
        bot.sendMessage(chatId, `
            Ismim: Tohir \nFamiliyam: Doniyorov \nTug'ulgan sanam: 2003-yil 8-iyun \nSevimli mashg'ulotlarim: Dasturchilik, Futbol
        `, {
        })
    }else if(msg.text == "Mening ko'nikmalarim"){
        bot.sendPhoto(chatId, "https://cdn2.vectorstock.com/i/1000x1000/10/61/competence-infographic-10-steps-bubble-design-vector-27301061.jpg", {
            caption: `
            1} HTML \n2} CSS \n3} Git \n4} GitHub \n5} SCSS \n6} SASS \n7} Bootstrap \n8} JavaScript \n9} React.js \n10} Node.js \n11} Express \n12} Socket \n13} Telegram bot
        `
        })
    }else if(msg.text == "Mening amaliy ishlarim"){
        bot.sendPhoto(chatId, "https://shipcon.eu.com/wp-content/uploads/2016/02/PMEU.jpg", {
            caption: `
https://you-tube-clon.netlify.app/
https://github.com/tohird03/you-tube-clon

https://corzina-uz.netlify.app/
https://github.com/tohird03/corzina

https://library-03.netlify.app/
https://github.com/tohird03/book-library

https://kvadrat-funksiya-kalkulator-03.netlify.app/
https://github.com/tohird03/kvadrat-funksiya`,
            reply_markup: {
                inline_keyboard: [
                    [
                        {
                            text: "YouTube clone",
                            url: "https://you-tube-clon.netlify.app/"
                        },
                        {
                            text: "Online shop",
                            url: "https://corzina-uz.netlify.app/"
                        },
                    ],
                    [
                        {
                            text: "Library",
                            url: "https://library-03.netlify.app/"
                        },
                        {
                            text: "Math function",
                            url: "https://kvadrat-funksiya-kalkulator-03.netlify.app/"
                        },
                    ]
                ]
            }
        })
    }else if(msg.text == "Ijtimoiy tarmoqlarim"){
        bot.sendPhoto(chatId, "https://i1.wp.com/fb.ru/misc/i/gallery/55843/2024478.jpg", {
            caption: `Mening ijtimoiy tarmoqlarim \nPochtam: tohirjondoniyorov@gmail.com`,
            reply_markup: {
                inline_keyboard: [
                    [
                        {
                            text: "LinkedIn",
                            url: "https://www.linkedin.com/in/tohir-doniyorov-1b7540231/"
                        },
                        {
                            text: "GitHub",
                            url: "https://github.com/tohird03/"
                        },
                    ],
                    [
                        {
                            text: "Telegram",
                            url: "https://t.me/savM_571_632"
                        },
                        {
                            text: "Telegram kanalim",
                            url: "https://t.me/myPortfolio_tohird03"
                        },
                    ]
                ]
            }
        })
    }else if(msg.text == "Bot foydalanuvchilari"){
        var v = user

        var text = '';
        for (var i = 0; i < v.length; i++) {
            text += +i + 1 + ")" + " " + v[i] + '\n'; // or however you want to format it
        }
        bot.sendMessage(chatId, text);
    }
})