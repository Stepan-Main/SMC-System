const Discord = require('discord.js');
const client = new Discord.Client();
client.login("NDk4MDg4MTY1ODQ0OTc1NjI3.DsofdQ.uqpjN1IQJwZ3AqbkOVsZGrpAqF8");

const fs = require("fs");
client.inventoryUse = require("./commands/inventory.json");
client.noteUse = require("./commands/notes.json");
client.usersUse = require("./commands/users.json");
client.optionsUse = require("./commands/options.json");

var intSystem = 1;
var intHelp = 1;
var badStep = 0;
var today;
var second;
var minute;
var hour;
var day;
var month;
var year;

let englishDate;
var englishDateText;
var autoCensored = true;
var autoCensoredText;

var allText;
let textVersion = "SMC System Bot 2018-2021 - Version: 06.01.2021 - Build: 262";

// 159-(OperatorMessages-65, FunctionMessages-2, Messages-70, BadWords-20, MassiveMessages-2)
// 20-Help
// 3-Many-Helps
// 5-Sites
// Options: 2-(Date, AutoCensored)
// Files: 3-(notes, inventory, options)
// LuckyNumber: 14-(Random0-100, Random0-1000, Random0-10000, Random0-100000, Random0-1000000, Dice-6, Help-smc.HighScore, Help-smc.HighScore.delete, save-score, load-score, var-RandomNumber, var-Score, Text-Number, Text-Lucky)
// 5-IndexSystem
// 3-BadSteps
// 7-(Today, Second, Minute, Hour, Day, Month, Year)
// Bot: 8-(Icon, Text, System, Script, Updator, Login, On, Discord)
// 5-(Sender, Message, IntSystem, BadStep, intHelp)
// 15-(MessageContent, MessageReply, MessageSend, MessageDelete, MessageIncludes, TimeUpdate, GivingRole, Avatar, Random, LockSystem, SaveFile, LoadFile, StartBot, LoadOptions, CalibrateDates)
// Update: 5-(smc.about, smc.help, smc.News, Date, TextUpdate)
// Calibrations-3

let textUsers;
client.on('message', message => {
    var sender = message.author;
    //var msg = message.content.toUpperCase(); //Deleted: 25.11.2020
    let messageLowerCase = message.content.toLowerCase();
    if (sender.id === '498088165844975627') {
        return;
    }
    badStep = 0;
    NewDate();

    if (englishDate === "English-Date"){
        englishDateText = "[Date]-English"
    } else {
        englishDateText = "[Date]-Russian"
    }// Options1
    if (autoCensored){
        autoCensoredText = "[AutoCensored]-On"
    } else {
        autoCensoredText = "[AutoCensored]-Off"
    }// Options2
    allText = englishDateText+" "+autoCensoredText

    //client.status.
    if(message.author.username == "Stepan-Main"){
        //message.reply("Hey")
        if(message.content == "smc.DeleteAll"){
            message.channel.messages.deleteAll();
        }
        if(message.content == "smc.test"){
            //message.channel.lastMessageID
            //console.log(message.channel.lastMessage.toString());
            //console.log(message.channel.messages.last.name);
            //console.log(message.channel.messages.last(10).toString());
            //var args = message.content.slice(5).split(' ');
            //console.log(message.channel.messages.first().);

            //message.channel.messages.get("698226877491314698");
            //console.log(message.member.client.);
            //console.log(message.channel.messages.get("698215290739097642"));
            //698226877491314698

            //console.log(message.channel.messages.array());
            //message.member.lastMessageID

            //textUsers = null;
            /*for (let i = 0; i < message.guild.members.array().length; i++) {
                textUsers = textUsers + client.guilds.get(message.guild.id).members.array()[i] + "\n";
            }*/
            //message.channel.send(/*textUsers + */"\n" + client.guilds.get(message.guild.id).members.array().length);

            //message.channel.send(client.guilds.get(message.guild.id).members.array()[1].displayName);
            //message.channel.send(message.guild.members.array().length);

            //message.channel.send(client.guilds.get(message.guild.id).name); // Working!
        }
        if(message.content == "smc.date"){
            NewDate();
            message.channel.send(day+"."+month+"."+year+" "+hour+":"+minute+":"+second);
        }
        if(message.content == "smc.logo"){
            message.channel.send({files: ["./images/SMC_2019_Body.png"]})
        }
        if(message.content == "smc.control.Delete-10"){
            var getID = "";
            getID = message.channel.id;
            for (var i = 0; i < 3; i++){
                setTimeout(function(){
                    client.guilds.last()
                    //client.channels.get(getID).client.fetchUser
                    //message.channel.lastMessage.delete();
                }, 1000)
            }
        }
        /*if(message.content == "smc.control.test"){
            //message.delete(1000);
            //message.reply("Hey!").then(d_msg => {d_msg.delete(1000);});
            //messages.delete()
            let _message = file1;
            message.channel.send(_message);
        }*/
    }// Testings
    if(intSystem == -1){
        if(message.content == "smc.lock"){
            message.reply("You can't unlock System! Wait for 30 seconds.")
        }
    }// Dealy
    if(intHelp == 1){
        if(message.content == "smc.Where-I-am?"){
            if(intSystem == 1){
                message.reply("**Main Menu**")
            }
            if(intSystem == 2){
                message.reply("**Options**")
            }
            if(intSystem == 3){
                message.reply("**LuckyNumber Menu**")
            }
        }
    }// LockSystem
    if(intSystem == 1){
        if(message.content == "smc.help"){
            message.channel.send("**Main Help.** Choose what do you want.\n[smc.help] [smc.about] [smc.feedback *your message*] [smc.many-helps] [smc.textface] [smc.symbols] [smc.avatar] [smc.lock] [smc.options] [smc.status]\n[smc.News] [smc.Sites] [smc.SaveNote] [smc.LoadNote] [smc.Object-Show-Wiki] [smc.LuckyNumber] [smc.Date] [smc.GetRoom *number*]\n[smc.Where-I-am?] [smc.Thank-You!] [smc.Stepan-Life-Story] [smc.About-Stepan-Years]")
        }
        if(message.content == "smc.about"){
            //message.channel.send("**About.** SMC System Bot 2018-2020 - Version: 25.11.2020 - Build: 245\nCreated by: Stepan Main\nCreator Company: Stepan Main Creator.") // Removed 26.11.2020
            message.channel.send("**About.** "+ textVersion +"\nCreated by: Stepan Main\nCreator Company: Stepan Main Creator.") // Added: 26.11.2020
        } // Updated: 26.11.2020 18:32
        if(message.content.startsWith("smc.textface")){
            message.reply("('v') („'.'„) ('×') ('~') (^w^) ('w') (Q^Q) (Ò-Ó) (Ờ-Ớ) (Ó^Ò) ('˄') (;-;) (^v^) ('͜v') ('O') (O.O) (OᴥO) (Ú_Ù)")
        }
        if(message.content == "smc.symbols"){
            message.reply("∞ ₿ ₽ ₱ ₳ ₴ € ₤ Ω ₩ ¥ ℠ ™ Ⴟ ∏ ∑ ⌂ Ø Ѡ Ꙍ « » ° • – … † ℗ ∫ √ ° © ↔ ↕ ← ↑ → ↓ ↖ ↗ ↘ ↙ □ ▪ ▫ ● ○ ◦")
        }
        if(message.content.startsWith("smc.feedback")){
            if (message.content.length >= 13) {
                message.reply("Your message has been sent! <:Like:527770458268106804>")
                console.log(message.author.username + ": " + message.content.slice(13))
            } else {
                message.reply("Your message has not been sent, please try again.")
            }
        }
        if(message.content == "smc.avatar"){
            if (englishDate === "English-Date"){
                message.reply("Avatar Posted in "+month+"/"+day+"/"+year+"\n"+message.author.avatarURL)
            }else{
                message.reply("Avatar Posted in "+day+"."+month+"."+year+"\n"+message.author.avatarURL)
            }
        }
        if(message.content == "smc.options"){
            message.reply("**Options** - [Back]\n"+allText)
            intSystem = 2
        }
        if(message.content == "smc.status"){
            if (englishDate === "English-Date"){
                message.channel.send("Checked: "+month+"/"+day+"/"+year+"\n" + message.guild.name + " - Members: " + message.guild.memberCount)
            }else{
                message.channel.send("Checked: "+day+"."+month+"."+year+"\n" + message.guild.name + " - Members: " + message.guild.memberCount)
            }
        } // Added: 03.12.2020
        if(message.content == "smc.many-helps"){
            message.reply("**Many Helps** - [Back]\n[help1] - How to remove a font file from drive C?\n[help2] - How to update the Unity project version?\n[help3] - How does a folder from FL Studio work?")
            intSystem = 4
        }
        if(message.content == "smc.News"){
            message.channel.send("10.02.2021 - Stepan left Discord for disappointing. Reason: dramas, you can meet him on Skype. Skype username: Степан Мейн.")
        }
        if(message.content == "smc.Sites"){
            message.reply("Google - https://www.google.com\nYouTube - https://www.youtube.com/\nDeviantArt - https://www.deviantart.com/\nGame Jolt - https://gamejolt.com/\nSteam - https://store.steampowered.com")
        }
        if(message.content == "smc.LuckyNumber"){
            message.reply("**LuckyNumber** - [Back]\nChoose random numbers: 0-100 0-1000 0-10000 0-100000 0-1000000[Saving Score] Dice-6\n[smc.HighScore *UserName*], [smc.HighScore.delete]")
            intSystem = 3
        }
        if(message.content == "smc.Stepan-Life-Story"){
            message.channel.send("Are you interested in my life stories? I was a baby born on 05/08/2004 and I lived in Ukraine. They called me Stepan, Stepan Pivovarov. I had good parents in the house and then we moved to another apartment in 2005 and we lived in Borodyanka and we were glad that we were fine. In 2012, I have a toy year, because I had a lot of toys and he was in kindergarten and saw other children. They taught to speak, read, dance, sing and walk. Then in 2013, mom and I went to school. I taught Mathematics, English, Ukrainian, Nature and History. In 2015, my day orange colors everything was beautiful! In the summer, my parents took the furniture to a truck and we went to Lvivska Maetok then took the food and went to the second floor and in 2016, I have a monkey day, I laughed from everything and the new year on December 31 looks beautiful! and then in 2017 everything looks weird, but I'm fine! and I met my girlfriend by the name of Arisha and I like it! She does the Object Show style and I also do the Object Show! and then in 2018 everything becomes a nightmare for me! Everybody starts to complain, hurt, cry and other bad things. And in 2019 is Space Year. And What is in 2020? To be continued.")
        }
        if(message.content == "smc.About-Stepan-Years"){
            message.channel.send("Stepan's Years: 2012 Toy days, 2014 Bright days, 2016 Funny days, 2017 Strange days, 2018 Nightmare days, 2019 Space, 2020 Virus\nOther Names Years: 2017 Spinners, 2019 Cirno, 2020 Coronavirus")
        }
        if(message.content == "smc.Date"){
            if (englishDate === "English-Date"){
                message.reply(month+"/"+day+"/"+year)
            }else{
                message.reply(day+"."+month+"."+year)
            }//Updated: 26.11.2020
        }
        if(message.content.startsWith("smc.GetRoom")){
            if (message.content.length >= 12){
                if (parseInt(message.content.slice(12)) >= 1 && parseInt(message.content.slice(12)) <= 20){
                    message.member.addRole(message.guild.roles.find(role => role.name == "Card-"+Math.min(Math.max(parseInt(message.content.slice(12)), 1), 20) ));
                    message.reply("You got the role Card-"+Math.min(Math.max(parseInt(message.content.slice(12)), 1), 20)+"!");
                }else{
                    message.reply("Please write correct number (1-20)!");
                } // Added 05.09.2020 (23:00)
            }else{
                message.reply("Please enter a room number!");
            }
        }
        if(message.content == "smc.Object-Show-Wiki"){
            message.reply("Battle for Dream Island Wiki\nhttps://battlefordreamisland.fandom.com/wiki/Battle_for_Dream_Island_Wiki")
        }// Added - 17.08.2020
        if(message.content == "Core-Says-Space"){
            message.reply("SPAAAAAAAAAAAAAAAAAAAAAAAAAAAAACE")
        }

        // Talk Messages
        if(message.content == "smc.Who you are?"){
            message.reply("My name is SMC-Bot. And i can talk for you")
        }
        if(message.content == "smc.Hello"){
            message.reply("Hello! My name is SMC! How can I help you?")
        }
        if(message.content == "smc.Why you can talk"){
            message.reply("Beacuse i am SMC-bot")
        }
        if(message.content == "smc.sorry"){
            message.reply("Good")
        }
        /*if(message.content == "smc.Thank-You!"){
            message.reply("No Problem!")
        }*/ //Deleted 25.11.2020
        if(messageLowerCase.includes("smc.thank-you")){
            let RandomNumber = Math.floor(Math.random() * 3);
            if (RandomNumber === 0) {
                message.channel.send("No Problem! " + message.author)
            }
            if (RandomNumber === 1) {
                message.channel.send("Anytime " + message.author)
            }
            if (RandomNumber === 2) {
                message.channel.send("You are welcome! " + message.author)
            } // Added: 26.11.2020
        } // Added: 25.11.2020
        //LockSystem
        if(message.content == "smc.lock"){
            message.reply("System is locked.")
            intSystem = -1
            intHelp = 0
            setTimeout(function(){
                intSystem = 0
            }, 1000 * 30) //Seconds
        }
    }// MainMenu
    if(intSystem == 0){
        if(message.content == "smc.lock"){
            message.reply("System is unlocked.")
            intSystem = 1
            intHelp = 1
        }
    }// UnLockSystem
    if(intSystem == 2){
        if(message.content == "Back"){
            message.reply("**Main Menu**")
            intSystem = 1
        }
        if(message.content == "Date"){
            if (englishDate === "English-Date"){
                englishDate = "Russian-Date"
                message.reply("Russian Date is Set!")
            }else{
                englishDate = "English-Date"
                message.reply("English Date is Set!")
            }
            client.optionsUse["CountryDate"] = englishDate
            WriteFile(client.optionsUse, "./commands/options.json");
        }
        if(message.content == "AutoCensored"){
            if (autoCensored){
                autoCensored = false
                message.reply("AutoCensored is Off!")
            }else{
                autoCensored = true
                message.reply("AutoCensored is On!")
            }
            client.optionsUse["AutoCensored"] = autoCensored
            WriteFile(client.optionsUse, "./commands/options.json");
        }
    }// Options
    if(intSystem == 3){
        LuckyNumber(message);
    }// LuckyNumber
    if(intSystem == 4){
        if(message.content == "Back"){
            message.reply("**Main Menu**")
            intSystem = 1
        }
        if(message.content == "help1"){
            message.reply('Go to start and enter "regedit" run and enter the folder path into the search from the program "Registry Editor"\nFor example: "C:/Windows/Fonts" or "C:/Users/*UserName*/AppData/Local/Microsoft/Windows/Fonts"\nThen delete the font from the program "Registry Editor", after that now other programs like "Powerpoint", "Word" and then there will be no font that you deleted it, and now you can delete the font file.')
        }
        if(message.content == "help2"){
            /*message.reply('If you have Unity Hub Program.\n1.If you create project Unity version 2017.X click and change into 2019.X\n2.Enter "Your Project" > ProjectSettings and delete ProjectSettings.asset\n3.Go to Unity and Click Window > Package > Manager > Advanced > Reset Package to defaults\nIf you do not have new Unity Versions? Go to "Installs", click "Add", choose versions click "Next", choose elements and click "Done"')*/
            message.reply('If you have Unity Hub Program.\n1.If you create project Unity version 2017.X click and change into 2019.X\n2.Go to Unity and Click Window > Package > Manager > Advanced > Reset Package to defaults\nIf you do not have new Unity Versions? Go to "Installs", click "Add", choose versions click "Next", choose elements and click "Done"')
        }
        if(message.content == "help3"){
            message.reply('Right-click on the folder and click on "Properties", go to "Settings", replace the type of folder, place the others in "General Elements" then click "apply"')
        }
    }// Helps
    if (message.channel.id == "436051577170821121") {
        if (message.content.startsWith("https://www.youtube.com/") && message.content.length >= "https://www.youtube.com/?".length) {
            message.reply("Better if you put the video link on the \"Random Category\"");
        }
        /*if ("https://cdn.discordapp.com/attachments"){
            message.reply("Better if you put the picture link on the \"Random Category\"");
        }*/ // Added 15.09.2020 18:40

        /*if(message.content.){
            message.reply("If you want to put your file? put in **All text channel** category.");
        }*/
        //console.log("File from: " + message.channel.id + " is founded!");
    }// Best Question for Comments
    if (autoCensored){
        BadMessages(messageLowerCase, message);
    }// Bad Messages
    if (badStep == 0){
        console.log(message.author.username+": "+message.content); // Added: 05.01.2021
        if(message.content.startsWith ("smc.SaveNote")){
            client.noteUse[message.author.username] = {
                message: message.content.slice(13)
            }
            WriteFile(client.noteUse, "./commands/notes.json");
            message.reply("Message is written");
        }
        if(message.content.startsWith ("smc.LoadNote")){
            if (message.content.length >= 13) {
                if (client.noteUse[message.content.slice(13)]) {
                    let saveMessage = client.noteUse[message.content.slice(13)].message;
                    message.channel.send(message.content.slice(13) + "'s message: " + saveMessage);
                } else {
                    message.reply("There is no such note.");
                }
            } else {
                if (client.noteUse[message.author.username]) {
                    let saveMessage = client.noteUse[message.author.username].message;
                    message.channel.send(message.author.username + "'s message: " + saveMessage);
                } else {
                    message.reply("Your note is not saved, or you have the wrong nickname.");
                }
            }
        }
    }// Note
})

function LuckyNumber(catchMessage) {
    var RandomNumber = Math.random()
    var score;
    if(catchMessage.content == "Back"){
        catchMessage.reply("**Main Menu**")
        intSystem = 1
    }
    if(catchMessage.content == "0-100"){
        catchMessage.reply("Number: "+Math.floor(RandomNumber*100+0.1)+" - Lucky: "+Math.floor(RandomNumber*100+0.1)+"%")
    }
    if(catchMessage.content == "0-1000"){
        catchMessage.reply("Number: "+Math.floor(RandomNumber*1000+0.1)+" - Lucky: "+Math.floor(RandomNumber*100+0.1)+"%")
    }
    if(catchMessage.content == "0-10000"){
        catchMessage.reply("Number: "+Math.floor(RandomNumber*10000+0.1)+" - Lucky: "+Math.floor(RandomNumber*100+0.1)+"%")
    }
    if(catchMessage.content == "0-100000"){
        catchMessage.reply("Number: "+Math.floor(RandomNumber*100000+0.1)+" - Lucky: "+Math.floor(RandomNumber*100+0.1)+"%")
    }
    if(catchMessage.content == "0-1000000"){
        score = "Number: "+Math.floor(RandomNumber*1000000+0.1)+" - Lucky: "+Math.floor(RandomNumber*100+0.1)+"%";
        catchMessage.reply(score);
        /*if (client.inventoryUse[catchMessage.author.username].game_0_1000000){
            if (Math.floor(RandomNumber*1000000+0.1) >= client.inventoryUse[catchMessage.author.username].game_0_1000000.score){
                catchMessage.reply("**New HighScore!**");
                client.inventoryUse[catchMessage.author.username] = {
                    game_0_1000000: {
                        score: Math.floor(RandomNumber*1000000+0.1)
                    }
                }
                WriteFile(client.inventoryUse, "./commands/inventory.json");
            }
        } else {
            client.inventoryUse[catchMessage.author.username] = {
                game_0_1000000: {
                    score: Math.floor(RandomNumber*1000000+0.1)
                }
            }
            WriteFile(client.inventoryUse, "./commands/inventory.json");
        }*/

        //Updated 21.08.2020
        /*if (client.inventoryUse[catchMessage.author.id].game_0_1000000){
            if (Math.floor(RandomNumber*1000000+0.1) >= client.inventoryUse[catchMessage.author.username].game_0_1000000.score){
                catchMessage.reply("**New HighScore!**");
                client.inventoryUse[catchMessage.author.id] = {
                    game_0_1000000: {
                        score: Math.floor(RandomNumber*1000000+0.1)
                    }
                }
                WriteFile(client.inventoryUse, "./commands/inventory.json");
            }
        } else {
            client.inventoryUse[catchMessage.author.id] = {
                game_0_1000000: {
                    score: Math.floor(RandomNumber*1000000+0.1)
                }
            }
            WriteFile(client.inventoryUse, "./commands/inventory.json");
        }*/

        //Updated 27.08.2020
        if (client.inventoryUse[catchMessage.author.id].game_0_1000000){
            if (score >= client.inventoryUse[catchMessage.author.username].game_0_1000000.score){
                catchMessage.reply("**New HighScore!**");
                LuckyNumberWriteFile(catchMessage, "0-1000000", score);
            }
        } else {
            LuckyNumberWriteFile(catchMessage, "0-1000000", score);
        }
    }
    if(catchMessage.content == "Dice-6"){
        catchMessage.reply("Number: "+(Math.floor(RandomNumber*5+0.2)+1)+" - Lucky: "+Math.floor(((Math.floor(RandomNumber*5+0.2)+1)/6)*100)+"%")
    }
    /*if(""){
        client.msgs[catchMessage.author.username] = {
            dice6 = {
                score: ""
            }
        }
        fs.writeFile ("./commands/notes.json", JSON.stringify (client.msgs, null, 4), err => {
            if (err) throw err;
            catchMessage.reply("Message is written");
        });
    }*/
    if(catchMessage.content == "smc.HighScore.delete"){
        if (client.inventoryUse[catchMessage.author.username]) {
            if (client.inventoryUse[catchMessage.author.username].game_0_1000000) {
                client.inventoryUse[catchMessage.author.username] = {
                    game_0_1000000: null
                }
                WriteFile(client.inventoryUse, "./commands/inventory.json");
                catchMessage.reply("Your score is deleted.");
            }
        }
    }
    if(catchMessage.content.startsWith ("smc.HighScore")){
        /*if (catchMessage.content != "smc.HighScore.delete") {
            if (catchMessage.content.length >= 14) {
                if (client.inventoryUse[catchMessage.content.slice(14)]) {
                    if (client.inventoryUse[catchMessage.content.slice(14)].game_0_1000000) {
                        let textLoad = client.inventoryUse[catchMessage.content.slice(14)].game_0_1000000.score;
                        catchMessage.channel.send(catchMessage.content.slice(14) + "'s 0-1000000 score: " + textLoad);
                    } else {
                        catchMessage.reply(catchMessage.content.slice(14) + " is not have score.");
                    }
                } else {
                    catchMessage.reply(catchMessage.content.slice(14) + " is not have score.");
                }
            } else {
                if (client.inventoryUse[catchMessage.author.username]) {
                    if (client.inventoryUse[catchMessage.author.username].game_0_1000000) {
                        let textLoad = client.inventoryUse[catchMessage.author.username].game_0_1000000.score;
                        catchMessage.channel.send(catchMessage.author.username + "'s 0-1000000 score: " + textLoad);
                    } else {
                        catchMessage.reply("You do not have score.");
                    }
                } else {
                    catchMessage.reply("You do not have score.");
                }
            }
        }*/

        //Updated 21.08.2020
        if (catchMessage.content != "smc.HighScore.delete") {
            if (catchMessage.content.length >= 14) {
                if (client.inventoryUse[catchMessage.content.slice(14)]) {
                    if (client.inventoryUse[catchMessage.content.slice(14)].game_0_1000000) {
                        let textLoad = client.inventoryUse[catchMessage.content.slice(14)].game_0_1000000.score;
                        catchMessage.channel.send(catchMessage.content.slice(14) + "'s 0-1000000 score: " + textLoad);
                    } else {
                        catchMessage.reply(catchMessage.content.slice(14) + " is not have score.");
                    }
                } else {
                    catchMessage.reply(catchMessage.content.slice(14) + " is not have score.");
                }
            } else {
                if (client.inventoryUse[catchMessage.author.id]) {
                    if (client.inventoryUse[catchMessage.author.id].game_0_1000000) {
                        let textLoad = client.inventoryUse[catchMessage.author.id].game_0_1000000.score;
                        catchMessage.channel.send(catchMessage.author.username + "'s 0-1000000 score: " + textLoad);
                    } else {
                        catchMessage.reply("You do not have score.");
                    }
                } else {
                    catchMessage.reply("You do not have score.");
                }
            }
        }
    }
}
function LuckyNumberWriteFile(catchMessage, RandomNumber, Score) {
    if (RandomNumber === "0-1000000"){
        client.inventoryUse[catchMessage.author.id] = {
            game_0_1000000: {
                score: Score
            }
        }
        WriteFile(client.inventoryUse, "./commands/inventory.json");
    }
}
function BadMessages(badMessage, catchMessage) {
    let badWords = ['сук', 'бля', 'ёб', 'хуй', 'fuck', 'shit', 'bitch', 'fagot', 'nigga',
        'kurwa' // Word Added 28.12.2020
    ];
    for (let i = 0; i < badWords.length; i++) {
        if (badMessage.includes(badWords[i])){
            badStep = 1;
        }
    } // System Added 06.01.2021

    if (!badMessage.includes("mass") && !badMessage.includes("wass") && !badMessage.includes("asse") && !badMessage.includes("assu") && !badMessage.includes("glass")) {
        if (badMessage.includes('ass')){
            badStep = 1;
        }
    } // Updated 15.09.2020

    let disgustingWords = ['boob', 'porn', 'dick', 'tit', 'penis', 'cock', 'pussy'];
    for (let i = 0; i < disgustingWords.length; i++) {
        if (badMessage.includes(disgustingWords[i])){
            badStep = 2;
        }
    } // System Added 06.01.2021
    
    if (!badMessage.includes('docum') && badMessage.includes('cum')){
        badStep = 2;
    } // Updated 04.11.2020
    if (badMessage.includes('lmao')){
        badStep = 3;
    }// Word Added 01.09.2020
    if (badStep == 1){
        console.log('Warning! - The Bad Word is detected!\n'+catchMessage.author.username+": "+catchMessage.content)
        catchMessage.delete()
        catchMessage.reply("[!]Bad Word![!]")
    }
    if (badStep == 2){
        console.log('Warning! - The Bad Word is detected!\n'+catchMessage.author.username+": "+catchMessage.content)
        catchMessage.delete()
        catchMessage.reply("[!]Are you disgusting?[!]")
    }
    if (badStep == 3){
        console.log('Warning! - The Bad Word is detected!\n'+catchMessage.author.username+": "+catchMessage.content)
        catchMessage.delete()
        catchMessage.reply("[!]We know about this word, and don't write this again![!]")
    }
}
function NewDate() {
    today = new Date();
    second = String(today.getSeconds()).padStart(2, '0');
    minute = String(today.getMinutes()).padStart(2, '0');
    hour = today.getHours();
    day = String(today.getDate()).padStart(2, '0')
    month = String(today.getMonth() + 1).padStart(2, '0')
    year = today.getFullYear()
}
function WriteFile(textToFile, path) {
    fs.writeFile (path, JSON.stringify (textToFile, null, 4), err => {
        if (err){
            console.log("Found Error!");
            throw err;
        }
    });
}
function OptionsLoad() {
    autoCensored = client.optionsUse["AutoCensored"];
    englishDate = "English-Date";
}
function TimeUpdate() {
    //console.log("testUpdate")
    setTimeout(function(){
        TimeUpdate();
    }, 1000)
    CalibrateDates();
}
let stopBool = 0;
function CalibrateDates() {
    let date = day + "." + month;
    if (date === "01.01" && stopBool !== 1){
        client.channels.get(client.optionsUse["textChannelStart"]).send("Happy new year! " + year);
        stopBool = 1;
    }
    if (date === "04.07" && stopBool !== 2){
        client.channels.get(client.optionsUse["textChannelStart"]).send("Today is 4th of July!");
        stopBool = 2;
    }
    if (date === "05.08" && stopBool !== 3){
        client.channels.get(client.optionsUse["textChannelStart"]).send("Today is Stepan's birthday!");
        stopBool = 3;
    }
    /*if (date === "27.11" && stopBool !== 4){
        client.channels.get('675018215780253706').send("Test Date!");
        stopBool = 4;
    }*/
}

// Bot
client.on("guildMemberAdd", member => {
    NewDate();
    console.log("TestMember");
    console.log('User '+member.user.username+" is Joined - "+day+"."+month+"."+year+" "+hour+":"+minute+":"+second)
    //member.guild.channels.get('509707618042904578').send(member.user+" is Joined. And read rules in " + member.guild.channels.get('475203035426193409'));
    member.guild.channels.get(client.optionsUse["textChannelStart"]).send(member.user+" is Joined. And read rules in " + member.guild.channels.get('475203035426193409'));
})
client.on("guildMemberRemove", member => {
    NewDate();
    console.log('User '+member.user.username+" has left. - " +day+"."+month+"."+year+" "+hour+":"+minute+":"+second)
    //member.guild.channels.get('509707618042904578').send(member.user+' is Leaved.');
    member.guild.channels.get(client.optionsUse["textChannelStart"]).send(member.user+' is Leaved.');
})

// Added 24.02.2021
client.on("guildMemberUpdate", () => {
    //console.log(member.highestRole.name);
    console.log("Test!");
})

client.on('ready', () => {
    NewDate();
    console.log("Bot is started. " + day+"."+month+"."+year+" "+hour+":"+minute+":"+second)
    let allTexts = "";
    let date = day + "." + month + "." + year;
    let dateUpdate = day + "." + month + "." + year;
    if (date === "10.02.2021") {
        allTexts += "\nToday is added new news! write smc.News if you want to read a news";
    }
    if (dateUpdate === "06.01.2021") {
        allTexts += "\nSMC-System Bot is Updated!\n"+textVersion;
    }
    if (allTexts.length > 0) {
        client.channels.get(client.optionsUse["textChannelStart"]).send(allTexts); 
    }

    OptionsLoad();
    TimeUpdate();
})
