const util = require('../util'),
express = require('express'),
axios = require('axios')
const fs = require("fs");
const { application } = require('express')

let app = express()

//they moved news to this endpoint a while ago
 
 // news
 app.get('/api/v1/fortnite-br/surfaces/motd/target', (req, res) => {


    const fileName1 = `../Json_Files/localization.json`;
  const file1 = require(fileName1);
        const fileName = `../Json_Files/news.json`;
  const file = require(fileName);
  
  
      if(req.body.language == "en") {
        // 1st news
  file.contentItems[0].contentFields.body = file1.news.news1.en.body
        file.contentItems[0].contentFields.tabTitleOverride = file1.news.news1.en.titleonswitcher
        file.contentItems[0].contentFields.title = file1.news.news1.en.title
        // 2nd news
  file.contentItems[1].contentFields.body = file1.news.news2.en.body
        file.contentItems[1].contentFields.tabTitleOverride = file1.news.news2.en.titleonswitcher
        file.contentItems[1].contentFields.title = file1.news.news2.en.title      
      }
        else if(req.body.language == "ru") {
        // 1st news
  file.contentItems[0].contentFields.body = file1.news.news1.ru.body
        file.contentItems[0].contentFields.tabTitleOverride = file1.news.news1.ru.titleonswitcher
        file.contentItems[0].contentFields.title = file1.news.news1.ru.title
                // 2nd news
  file.contentItems[1].contentFields.body = file1.news.news2.ru.body
        file.contentItems[1].contentFields.tabTitleOverride = file1.news.news2.ru.titleonswitcher
        file.contentItems[1].contentFields.title = file1.news.news2.ru.title    
        }
  else if(req.body.language == "uk-UA") {
        // 1st news
  file.contentItems[0].contentFields.body = file1.news.news1.ua.body
        file.contentItems[0].contentFields.tabTitleOverride = file1.news.news1.ua.titleonswitcher
        file.contentItems[0].contentFields.title = file1.news.news1.ua.title
                // 2nd news
  file.contentItems[1].contentFields.body = file1.news.news2.ua.body
        file.contentItems[1].contentFields.tabTitleOverride = file1.news.news2.ua.titleonswitcher
        file.contentItems[1].contentFields.title = file1.news.news2.ua.title    
        }    
             else if(req.body.language == "pt-BR") {
        // 1st news
  file.contentItems[0].contentFields.body = file1.news.news1.pt.body
        file.contentItems[0].contentFields.tabTitleOverride = file1.news.news1.pt.titleonswitcher
        file.contentItems[0].contentFields.title = file1.news.news1.pt.title
                     // 2nd news
  file.contentItems[1].contentFields.body = file1.news.news2.pt.body
        file.contentItems[1].contentFields.tabTitleOverride = file1.news.news2.pt.titleonswitcher
        file.contentItems[1].contentFields.title = file1.news.news2.pt.title    
        }
        else if(req.body.language == "es") {
        // 1st news
  file.contentItems[0].contentFields.body = file1.news.news1.es.body
        file.contentItems[0].contentFields.tabTitleOverride = file1.news.news1.es.titleonswitcher
        file.contentItems[0].contentFields.title = file1.news.news1.es.title
                // 2nd news
  file.contentItems[1].contentFields.body = file1.news.news2.es.body
        file.contentItems[1].contentFields.tabTitleOverride = file1.news.news2.es.titleonswitcher
        file.contentItems[1].contentFields.title = file1.news.news2.es.title    
        }
        else if(req.body.language == "es-419") {
        // 1st news
  file.contentItems[0].contentFields.body = file1.news.news1.es.body
        file.contentItems[0].contentFields.tabTitleOverride = file1.news.news1.es.titleonswitcher
        file.contentItems[0].contentFields.title = file1.news.news1.es.title
                        // 2nd news
  file.contentItems[1].contentFields.body = file1.news.news2.es.body
        file.contentItems[1].contentFields.tabTitleOverride = file1.news.news2.es.titleonswitcher
        file.contentItems[1].contentFields.title = file1.news.news2.es.title   
        }      
           else if(req.body.language == "fr") {
        // 1st news
  file.contentItems[0].contentFields.body = file1.news.news1.fr.body
        file.contentItems[0].contentFields.tabTitleOverride = file1.news.news1.fr.titleonswitcher
        file.contentItems[0].contentFields.title = file1.news.news1.fr.title
                // 2nd news
  file.contentItems[1].contentFields.body = file1.news.news2.fr.body
        file.contentItems[1].contentFields.tabTitleOverride = file1.news.news2.fr.titleonswitcher
        file.contentItems[1].contentFields.title = file1.news.news2.fr.title   
        }      
           else if(req.body.language == "ja") {
        // 1st news
  file.contentItems[0].contentFields.body = file1.news.news1.ja.body
        file.contentItems[0].contentFields.tabTitleOverride = file1.news.news1.ja.titleonswitcher
        file.contentItems[0].contentFields.title = file1.news.news1.ja.title
                           // 2nd news
  file.contentItems[1].contentFields.body = file1.news.news2.ja.body
        file.contentItems[1].contentFields.tabTitleOverride = file1.news.news2.ja.titleonswitcher
        file.contentItems[1].contentFields.title = file1.news.news2.ja.title   
        }    
           else if(req.body.language == "de") {
        // 1st news
  file.contentItems[0].contentFields.body = file1.news.news1.de.body
        file.contentItems[0].contentFields.tabTitleOverride = file1.news.news1.de.titleonswitcher
        file.contentItems[0].contentFields.title = file1.news.news1.de.title
                                      // 2nd news
  file.contentItems[1].contentFields.body = file1.news.news2.de.body
        file.contentItems[1].contentFields.tabTitleOverride = file1.news.news2.de.titleonswitcher
        file.contentItems[1].contentFields.title = file1.news.news2.de.title   
        }   
           else if(req.body.language == "it") {
        // 1st news
  file.contentItems[0].contentFields.body = file1.news.news1.it.body
        file.contentItems[0].contentFields.tabTitleOverride = file1.news.news1.it.titleonswitcher
        file.contentItems[0].contentFields.title = file1.news.news1.it.title
                                                 // 2nd news
  file.contentItems[1].contentFields.body = file1.news.news2.it.body
        file.contentItems[1].contentFields.tabTitleOverride = file1.news.news2.it.titleonswitcher
        file.contentItems[1].contentFields.title = file1.news.news2.it.title   
        }    
      else {
        // 1st news
  file.contentItems[0].contentFields.body = file1.news.news1.en.body
        file.contentItems[0].contentFields.tabTitleOverride = file1.news.news1.en.titleonswitcher
        file.contentItems[0].contentFields.title = file1.news.news1.en.title
        // 2nd news
  file.contentItems[1].contentFields.body = file1.news.news2.en.body
        file.contentItems[1].contentFields.tabTitleOverride = file1.news.news2.en.titleonswitcher
        file.contentItems[1].contentFields.title = file1.news.news2.en.title          
      }
        
      console.log("News lang is " + req.body.language)
        res.json(file)
   console.log("Requested for news")
      });

// fn game
 app.get("/content/api/pages/fortnite-game/", (req,res) => {
let rawdata = fs.readFileSync(`./Json_Files/fortnite-game.json`);
let fortnitegame = JSON.parse(rawdata);
  const fileName1 = `../Json_Files/localization.json`;
const file1 = require(fileName1);
      const fileName = `../Json_Files/fortnite-game.json`;
const file = require(fileName);


    if(req.headers["accept-language"] == "en") {
      file.emergencynoticev2.emergencynotices.emergencynotices[0].title = file1.emergencynoticev2.en.title
          file.emergencynoticev2.emergencynotices.emergencynotices[0].body = file1.emergencynoticev2.en.body
    }
      else if(req.headers["accept-language"] == "ru") {
      file.emergencynoticev2.emergencynotices.emergencynotices[0].title = file1.emergencynoticev2.ru.title
          file.emergencynoticev2.emergencynotices.emergencynotices[0].body = file1.emergencynoticev2.ru.body
      }
      else if(req.headers["accept-language"] == "uk-UA") {
      file.emergencynoticev2.emergencynotices.emergencynotices[0].title = file1.emergencynoticev2.ua.title
          file.emergencynoticev2.emergencynotices.emergencynotices[0].body = file1.emergencynoticev2.ua.body
      }
           else if(req.headers["accept-language"] == "pt-BR") {
      file.emergencynoticev2.emergencynotices.emergencynotices[0].title = file1.emergencynoticev2.pt.title
          file.emergencynoticev2.emergencynotices.emergencynotices[0].body = file1.emergencynoticev2.pt.body
      }
      else if(req.headers["accept-language"] == "es") {
      file.emergencynoticev2.emergencynotices.emergencynotices[0].title = file1.emergencynoticev2.es.title
          file.emergencynoticev2.emergencynotices.emergencynotices[0].body = file1.emergencynoticev2.es.body
      }
      else if(req.headers["accept-language"] == "es-419") {
      file.emergencynoticev2.emergencynotices.emergencynotices[0].title = file1.emergencynoticev2.es.title
          file.emergencynoticev2.emergencynotices.emergencynotices[0].body = file1.emergencynoticev2.es.body
      }      
         else if(req.headers["accept-language"] == "fr") {
      file.emergencynoticev2.emergencynotices.emergencynotices[0].title = file1.emergencynoticev2.fr.title
          file.emergencynoticev2.emergencynotices.emergencynotices[0].body = file1.emergencynoticev2.fr.body
      }      
         else if(req.headers["accept-language"] == "ja") {
      file.emergencynoticev2.emergencynotices.emergencynotices[0].title = file1.emergencynoticev2.ja.title
          file.emergencynoticev2.emergencynotices.emergencynotices[0].body = file1.emergencynoticev2.ja.body
      }    
         else if(req.headers["accept-language"] == "de") {
      file.emergencynoticev2.emergencynotices.emergencynotices[0].title = file1.emergencynoticev2.de.title
          file.emergencynoticev2.emergencynotices.emergencynotices[0].body = file1.emergencynoticev2.de.body
      }   
         else if(req.headers["accept-language"] == "it") {
      file.emergencynoticev2.emergencynotices.emergencynotices[0].title = file1.emergencynoticev2.it.title
          file.emergencynoticev2.emergencynotices.emergencynotices[0].body = file1.emergencynoticev2.it.body
      }    
    else {
          file.emergencynoticev2.emergencynotices.emergencynotices[0].title = file1.emergencynoticev2.en.title
          file.emergencynoticev2.emergencynotices.emergencynotices[0].body = file1.emergencynoticev2.en.body
    }
    console.log(req.headers["accept-language"])
      res.json(file)
 console.log("Requested for fortnite-game")

  
  }) 

// shop

app.get('/fortnite/api/storefront/v2/catalog', (req, res) => {
	res.json(require("../Json_Files/shop.json"));
      console.log("Requested for shop")
});


app.get('/content/api/pages/fortnite-game/media-events', async (req, res) => {

    axios.get('https://fortnitecontent-website-prod07.ol.epicgames.com/content/api/pages/fortnite-game/media-events')
    .then(response => {
        res.json(response.data)
    })
})

module.exports = app