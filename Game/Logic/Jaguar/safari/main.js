/* 
 This file was generated by Dashcode.  
 You may edit this file to customize your widget or web page 
 according to the license.txt file included in the project.
 */

//
// Function: load()
// Called by HTML body element's onload event when the web application is ready to start
//
function load()
{
    dashcode.setupParts();
    detailTest();
    setupLogic();
}

function detailTest(event)
{
document.getElementById("stackLayout").object.setCurrentView("Team1", false);
}

function NextTeamSwitch(event)
{
document.getElementById("stackLayout").object.setCurrentView("Team2", false);
}

function BeginGame(event)
{
document.getElementById("stackLayout").object.setCurrentView("Scoreboard", false);
WriteScores();
}

function LoadQuestion1(event)
{
document.getElementById("stackLayout").object.setCurrentView("Main", false);
}

function PickCstTeam1(event)
{
document.getElementById("TeamPicker").object.setCurrentView("CustomTeam1", false);
}

function PickCstTeam2(event)
{
document.getElementById("TeamPicker1").object.setCurrentView("view2", false);
}

function LoadMain(event)
{
document.getElementById("stackLayout").object.setCurrentView("Main", false);
}

function Reset()
{
window.location.reload()
}

//
// Gamelogic.js
// The way that the game actually works
//

var TeamName1;
var TeamPoints1;
var TeamName2;
var TeamPoints2;

function setupLogic()
{
    TeamName1 = "Not Yet Picked";
    TeamPoints1=0;
    // Values you provide
    document.getElementById("TeamStringUI").innerText = TeamName1;
}

function SalamanderSetup()
{
    TeamName1="Salamander";
    TeamPoints1=0;
    document.getElementById("TeamStringUI").innerText = TeamName1;
    document.getElementById("salpick1").object.setText("Picked");
    document.getElementById("salpick2").object.setEnabled(false);
    document.getElementById("greenpick1").object.setEnabled(false);
    document.getElementById("homepick1").object.setEnabled(false);
    document.getElementById("custom1").object.setEnabled(false);
}

function HomelessSetup()
{
    TeamName1="Homeless Helpers";
    TeamPoints1=0;
    document.getElementById("TeamStringUI").innerText = TeamName1;
    document.getElementById("salpick1").object.setEnabled(false);
    document.getElementById("homepick2").object.setEnabled(false);
    document.getElementById("greenpick1").object.setEnabled(false);
    document.getElementById("custom1").object.setEnabled(false);
}

function CustomSetup()
{
    var textBox1 = document.getElementById("CustNameField");
    var CustName1 = textBox1.value;
    TeamName1 = CustName1;
    TeamPoints1 = 0;
    document.getElementById("TeamStringUI").innerText = TeamName1;
    document.getElementById("custompick1").object.setText("Picked");
    document.getElementById("salpick1").object.setEnabled(false);
    document.getElementById("greenpick1").object.setEnabled(false);
    document.getElementById("custom1").object.setEnabled(false);
    document.getElementById("homepick1").object.setEnabled(false);
}

function CustomSetup2()
{
    var textBox2 = document.getElementById("CustNameField2");
    var CustName2 = textBox2.value;
    TeamName2 = CustName2;
    TeamPoints2 = 0;
    document.getElementById("custompick2").object.setText("Picked");
    document.getElementById("salpick2").object.setEnabled(false);
    document.getElementById("greenpick2").object.setEnabled(false);
    document.getElementById("custom2").object.setEnabled(false);
    document.getElementById("homepick2").object.setEnabled(false);
}

//
// Scoreboard.js
// Keeps Score
//

function WriteScores()
{
    document.getElementById("Team1Scr").innerText = TeamName1;
    document.getElementById("Team2Scr").innerText = TeamName2;
    document.getElementById("Team1Num").innerText = TeamPoints1;
    document.getElementById("Team2Num").innerText = TeamPoints2;
}