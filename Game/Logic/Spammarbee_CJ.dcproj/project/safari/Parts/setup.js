/* 
 This file was generated by Dashcode and is covered by the 
 license.txt included in the project.  You may edit this file, 
 however it is recommended to first turn off the Dashcode 
 code generator otherwise the changes will be lost.
 */
var dashcodePartSpecs = {
    "BeginGamebutton": { "initialHeight": 62, "initialWidth": 212, "leftImageWidth": 31, "onclick": "LoadQuestion1", "rightImageWidth": 31, "text": "BEGIN!", "view": "DC.PushButton" },
    "button": { "initialHeight": 27, "initialWidth": 90, "leftImageWidth": 5, "rightImageWidth": 5, "text": "Settings", "view": "DC.PushButton" },
    "button1": { "initialHeight": 27, "initialWidth": 102, "leftImageWidth": 5, "onclick": "detailTest", "rightImageWidth": 5, "text": "Pick Team", "view": "DC.PushButton" },
    "button10": { "initialHeight": 30, "initialWidth": 96, "leftImageWidth": 5, "onclick": "LoadMain", "rightImageWidth": 5, "text": "LD_MAIN", "view": "DC.PushButton" },
    "button15": { "initialHeight": 62, "initialWidth": 162, "leftImageWidth": 31, "onclick": "BeginGame", "rightImageWidth": 31, "text": "Next", "view": "DC.PushButton" },
    "button2": { "initialHeight": 26, "initialWidth": 82, "leftImageWidth": 5, "onclick": "Reset", "rightImageWidth": 5, "text": "RESET", "view": "DC.PushButton" },
    "button3": { "initialHeight": 30, "initialWidth": 123, "leftImageWidth": 15, "onclick": "Question1", "rightImageWidth": 15, "text": "CheckAnswer", "view": "DC.PushButton" },
    "button4": { "initialHeight": 30, "initialWidth": 123, "leftImageWidth": 15, "onclick": "Question2", "rightImageWidth": 15, "text": "CheckAnswer", "view": "DC.PushButton" },
    "button6": { "initialHeight": 62, "initialWidth": 162, "leftImageWidth": 31, "onclick": "NextTeamSwitch", "rightImageWidth": 31, "text": "Next", "view": "DC.PushButton" },
    "button8": { "initialHeight": 30, "initialWidth": 114, "leftImageWidth": 5, "rightImageWidth": 5, "text": "FORCE_WIN", "view": "DC.PushButton" },
    "button9": { "initialHeight": 30, "initialWidth": 123, "leftImageWidth": 5, "rightImageWidth": 5, "text": "FORCE_LOSE", "view": "DC.PushButton" },
    "custom1": { "initialHeight": 62, "initialWidth": 165, "leftImageWidth": 31, "onclick": "PickCstTeam1", "rightImageWidth": 31, "text": "Custom Team", "view": "DC.PushButton" },
    "custom2": { "initialHeight": 62, "initialWidth": 165, "leftImageWidth": 31, "onclick": "PickCstTeam2", "rightImageWidth": 31, "text": "Custom Team", "view": "DC.PushButton" },
    "custompick1": { "initialHeight": 30, "initialWidth": 131, "leftImageWidth": 15, "onclick": "CustomSetup", "rightImageWidth": 15, "text": "Pick for Team 1", "view": "DC.PushButton" },
    "custompick2": { "initialHeight": 30, "initialWidth": 131, "leftImageWidth": 15, "onclick": "CustomSetup2", "rightImageWidth": 15, "text": "Pick for Team 2", "view": "DC.PushButton" },
    "Descp1": { "text": "The Salamander Team is a very descriptive name, but choose carefully!", "view": "DC.Text" },
    "Descp2": { "text": "The homeless helpers, a original team!", "view": "DC.Text" },
    "Descp3": { "text": "The Green Team, an  classic chice!", "view": "DC.Text" },
    "greenpick1": { "initialHeight": 30, "initialWidth": 131, "leftImageWidth": 15, "onclick": "GreenSetup", "rightImageWidth": 15, "text": "Pick for Team 1", "view": "DC.PushButton" },
    "greenpick2": { "initialHeight": 30, "initialWidth": 131, "leftImageWidth": 15, "onclick": "GreenSetup2", "rightImageWidth": 15, "text": "Pick for Team 2", "view": "DC.PushButton" },
    "Homeless": { "view": "DC.ImageLayout" },
    "homepick1": { "initialHeight": 30, "initialWidth": 131, "leftImageWidth": 15, "onclick": "HomelessSetup", "rightImageWidth": 15, "text": "Pick for Team 1", "view": "DC.PushButton" },
    "homepick2": { "initialHeight": 30, "initialWidth": 131, "leftImageWidth": 15, "onclick": "HomelessSetup2", "rightImageWidth": 15, "text": "Pick for Team 2", "view": "DC.PushButton" },
    "image": { "view": "DC.ImageLayout" },
    "image1": { "view": "DC.ImageLayout" },
    "image2": { "view": "DC.ImageLayout" },
    "image3": { "view": "DC.ImageLayout" },
    "image4": { "view": "DC.ImageLayout" },
    "image5": { "view": "DC.ImageLayout" },
    "Qst1": { "text": "Identify all NOUNS in the sentence.\n", "view": "DC.Text" },
    "RenderQuestion": { "subviewsTransitions": [{ "direction": "right-left", "duration": "", "timing": "ease-in-out", "type": "push" }, { "direction": "right-left", "duration": "", "timing": "ease-in-out", "type": "push" }, { "direction": "right-left", "duration": "", "timing": "ease-in-out", "type": "push" }, { "direction": "right-left", "duration": "", "timing": "ease-in-out", "type": "push" }], "view": "DC.StackLayout" },
    "Salamander": { "view": "DC.ImageLayout" },
    "salpick1": { "initialHeight": 30, "initialWidth": 131, "leftImageWidth": 15, "onclick": "SalamanderSetup", "rightImageWidth": 15, "text": "Pick for Team 1", "view": "DC.PushButton" },
    "salpick2": { "initialHeight": 30, "initialWidth": 131, "leftImageWidth": 15, "rightImageWidth": 15, "text": "Pick for Team 2", "view": "DC.PushButton" },
    "stackLayout": { "subviewsTransitions": [{ "direction": "right-left", "duration": "", "timing": "ease-in-out", "type": "cube" }, { "direction": "right-left", "duration": "", "timing": "ease-in-out", "type": "cube" }, { "direction": "right-left", "duration": "", "timing": "ease-in-out", "type": "push" }, { "direction": "right-left", "duration": "", "timing": "ease-in-out", "type": "push" }], "view": "DC.StackLayout" },
    "Team1Num": { "text": "0", "view": "DC.Text" },
    "Team1Scr": { "text": "TEAM_1", "view": "DC.Text" },
    "Team2Num": { "text": "0", "view": "DC.Text" },
    "Team2Scr": { "text": "TEAM_2", "view": "DC.Text" },
    "Team2Text": { "text": "Team 2", "view": "DC.Text" },
    "TeamPicker": { "subviewsTransitions": [{ "direction": "right-left", "duration": "", "timing": "ease-in-out", "type": "push" }, { "direction": "right-left", "duration": "", "timing": "ease-in-out", "type": "push" }], "view": "DC.StackLayout" },
    "TeamPicker1": { "subviewsTransitions": [{ "direction": "right-left", "duration": "", "timing": "ease-in-out", "type": "push" }, { "direction": "right-left", "duration": "", "timing": "ease-in-out", "type": "push" }], "view": "DC.StackLayout" },
    "TeamStringUI": { "text": "STRING_TEAM-NAME", "view": "DC.Text" },
    "text": { "text": "Scoreboard", "view": "DC.Text" },
    "text1": { "text": "Team Name:", "view": "DC.Text" },
    "Text1": { "text": "Question 1", "view": "DC.Text" },
    "text10": { "text": "Identify all ADJECTIVES in the sentence.", "view": "DC.Text" },
    "text11": { "text": "We ate our delicious lunch very quickly so we could go outside to play our favorite game.", "view": "DC.Text" },
    "text12": { "text": "Green", "view": "DC.Text" },
    "text2": { "text": "The Salamander Team is a very descriptive name, but choose carefully!", "view": "DC.Text" },
    "Text2": { "text": "Question 2", "view": "DC.Text" },
    "text3": { "text": "The homeless helpers, a original team!", "view": "DC.Text" },
    "Text3": { "text": "Question 3", "view": "DC.Text" },
    "text4": { "text": "Team 1", "view": "DC.Text" },
    "text5": { "text": "Green", "view": "DC.Text" },
    "text6": { "text": "The Green Team, an  classic chice!", "view": "DC.Text" },
    "text7": { "text": "Debug", "view": "DC.Text" },
    "text8": { "text": "Team Name:", "view": "DC.Text" },
    "text9": { "text": "The orange cat was eating his catfood very slowly.", "view": "DC.Text" }
};



