[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![Hits](https://hits.seeyoufarm.com/api/count/incr/badge.svg?url=https://github.com/suphiyasin/Instagram-Automation-Tools&count_bg=%23C83D3D&title_bg=%23057386&icon=&icon_color=%23BA0808&title=View&edge_flat=false)](https://github.com/suphiyasin/Instagram-Automation-Tools)


<br />
<p align="center">
<a href="https://github.com/suphiyasin/Instagram-Automation-Tools/">
<img src="https://cdn.cdnlogo.com/logos/i/4/instagram.svg" alt="Logo" width="80" height="80" />
</a>

<h3 align="center">Instagram Advanced User Finder V2.0.0</h3>

<p align="center">
    With this React & Nodejs app, you can find users on Instagram and message them.
    <br>
    <a href="https://github.com/suphiyasin/Instagram-Automation-Tools/issues">Feedback</a>
    <br>
    <a href="https://suphi.org/docs.html" style="font-size:24px">Türkçe</a>
</p>



# Get Key
Pricing<br/>
Daily => 4.90$<br/>
Weekly => 14.90$<br/>
Monthly => 29.90$<br/>
To obtain a monthly license, please contact <a href="https://t.me/suphi007">@suphi007</a>.
<br>

### <font style="color:#00ff00">Free license on weekends</font>

## About the project

You can gather tens of thousands of users from one user with the features you are looking for on Instagram, collect phone numbers or e-mail addresses from their bios, contacts, and then send them a message with the text/HTML you want.

### Requirements

- Nodejs
- React

## Using the repo by downloading

1. <a href="https://github.com/suphiyasin/Instagram-Automation-Tools/archive/refs/heads/main.zip">This</a> download script
2. Create "rich" name database.
3. And import the "rich.sql" or
4. sql query
```mysql
CREATE DATABASE `rich` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci */

CREATE TABLE `bots` (
  `BotUserName` text NOT NULL,
  `BotToken` text NOT NULL,
  `BotAd` text NOT NULL,
  `BotTarih` date NOT NULL,
  `BotLimit` text NOT NULL,
  `KalanLimit` text NOT NULL,
  `BotVerify` text NOT NULL,
  `BotWebhook` text NOT NULL,
  `Statu` int(11) NOT NULL DEFAULT 0,
  `BotBitis` date NOT NULL,
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci

CREATE TABLE `toplananhesaplar` (
  `username` text NOT NULL,
  `full_name` text NOT NULL,
  `pk` text NOT NULL,
  `Email` text DEFAULT NULL,
  `phonenumber` text DEFAULT NULL,
  `verifed` tinyint(1) NOT NULL,
  `takipci` int(11) NOT NULL,
  `takipedilen` int(11) NOT NULL,
  `location` text NOT NULL,
  `Statu` int(11) NOT NULL,
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB AUTO_INCREMENT=1752 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci

CREATE TABLE `webmail` (
  `smtphost` text NOT NULL,
  `port` int(11) NOT NULL,
  `secure` tinyint(1) NOT NULL,
  `email` text NOT NULL,
  `pass` text NOT NULL,
  `subject` text NOT NULL,
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci


```


# How to Use the Panel?

### 1- Data collecting

#### a. User Aggregation
Firstly, in the "account gathering" section, <br/>
1-) Gathering from Suggestions: Here, you enter a username, and all accounts that resemble it are collected, and their emails and phone numbers are checked.<br/>
2-) Gathering from Location: You enter the ID of a location, and it collects accounts that have made posts in that location, scanning them.<br/>
3-) General Gathering: A gathering process is initiated with the support of artificial intelligence (ChatGPT Turbo 3.5 Supported)...<br/>
4-) Gathering from Hashtags: A service that is currently under maintenance.<br/>

### Send Message

#### a. Sending Mail

SMTP Settings
1. Enter the "webmail" on phpmyadmin etc. and insert your webmail .

Sending process

3. Click the "mail sender" menu under the "Sender" menu.<br/>
4. After making the mail, press the "Start" button and wait.

#### a. Send an Instagram DM

1. Click on the "dm sender" menu under the "Sender" menu.<br/>
2. Type the message to be sent in the "Draft" section of the screen that appears.<br/>
3. In the "Enter Your Accounts" section, enter your Instagram user and password that you will message, with : (colon above) between them.<br/>
4. After performing all the operations, press the "Start" button and wait.<br/>

#### a. Sending a message with Whatsapp

1. Click on the " wp sender" menu under the "Sender" menu.
2. In the "ENTER NO LIST" section, enter the phone numbers of the people to whom the message will be sent, with a space between them.
3. Enter the message to be sent in the "DRAFT" section.
4. After performing all the operations, press the "Start" button and wait.

# Weekly Key Area (Suspend)
```
Username => userpanel
Password =>  Contact me  Telegram @suphi007
``` 
# Screenshots
## Index
![image](https://github.com/suphiyasin/Instagram-Automation-Tools/assets/65618247/83ff4e0b-2d90-4c98-bf26-cf1f96b5ae2d)

## Collect From Location
![image](https://github.com/suphiyasin/Instagram-Automation-Tools/assets/65618247/33858e02-2c24-4c92-89ce-3f95a2e876c0)

## Collect With AI
![image](https://github.com/suphiyasin/Instagram-Automation-Tools/assets/65618247/4a3ca197-95f3-4d90-91d8-6a90836336b6)

## Mail sender
![image](https://github.com/suphiyasin/Instagram-Automation-Tools/assets/65618247/08ad589a-232c-4af4-9e5f-1d805ef6de84)

## WP Sender 
![image](https://github.com/suphiyasin/Instagram-Automation-Tools/assets/65618247/7742cbea-c855-4e85-a5a3-4f6f46fd9044)

## DM Sender
![image](https://github.com/suphiyasin/Instagram-Automation-Tools/assets/65618247/4d10327c-b490-4624-8785-1f3932dd43a1)

## Messenger Sender
![image](https://github.com/suphiyasin/Instagram-Automation-Tools/assets/65618247/ad487f7b-a8af-476d-bd8c-42000e005639)


[contributors-shield]: https://img.shields.io/github/contributors/suphiyasin/instagram-advanced-user-finder.svg?style=for-the-badge
[contributors-url]: https://github.com/suphiyasin/Instagram-Automation-Tools/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/suphiyasin/instagram-advanced-user-finder.svg?style=for-the-badge
[forks-url]: https://github.com/suphiyasin/Instagram-Automation-Tools/network/members
[stars-shield]: https://img.shields.io/github/stars/suphiyasin/instagram-advanced-user-finder.svg?style=for-the-badge
[stars-url]: https://github.com/suphiyasin/Instagram-Automation-Tools/stargazers
[issues-shield]: https://img.shields.io/github/issues/suphiyasin/instagram-advanced-user-finder.svg?style=for-the-badge
[issues-url]: https://github.com/suphiyasin/Instagram-Automation-Tools/issues
