var MongoClient = require('mongodb').MongoClient, assert = require('assert');
var util = require('util')

var url = 'mongodb://localhost:27017/test';

require('Replay')
var httpRequest = require('request')
var cheerio = require('cheerio')

// This is needed to see errors (sodumb)
if (typeof Promise.prototype.done !== 'function') {
  Promise.prototype.done = function (onFulfilled, onRejected) {
    var self = arguments.length ? this.then.apply(this, arguments) : this
    self.then(null, function (err) {
      setTimeout(function () {
        throw error
      }, 0)
    })
  }
}

console.log("Scraping...")

var heroes = [
    'kerrigan',
    'arthas',
    'azmodan',
]


heroes.forEach(function (heroNameId) {
    httpRequest('http://www.heroesfire.com/hots/wiki/heroes/' + heroNameId + '?kit', function (error, response, body) {
        if (error) throw error

        // console.log("Response:", body )
        $ = cheerio.load(body)

        // Find h2 with ability text
        var h2s = $('h2')


        var abilityH2 = h2s.toArray().filter(function (element) {
            return $(element).text().match( /^Abilities[^ ]/ )
        })

        // Find h2 with herioc ability text
        var heroicH2 = h2s.toArray().filter(function (element){
            return $(element).text().match( /^Heroic Abilities/ )
        })


        heroStats = $('.hero-stats').contents().toArray()
        stats = $('.hero-stats').contents().toArray()





        // Grab relevant data
        var abilityData = {

            Q: {
                name: $(abilityH2).parent()
                        .find('table').eq(0)
                        .find('td').eq(1)
                        .find('span').eq(0)
                        .find('span')
                        .html()

                ,
                mana: parseInt(
                        $(abilityH2).parent()
                        .find('table').eq(0)
                        .find('td').eq(1)
                        .children('span').eq(3)
                        .html()
                        .replace(/[^0-9]/g, '')
                )
                ,
                cooldown: parseInt(
                        $(abilityH2).parent()
                        .find('table').eq(0)
                        .find('td').eq(1)
                        .find('span').eq(5)
                        .html()
                        .replace(/[^0-9]/g, '')
                )
                ,
                damage: parseInt(
                        $(abilityH2).parent()
                        .find('table').eq(0)
                        .find('td').eq(1)
                        .find('span').eq(7)
                        .html()
                )
                ,
                damagePerLevel: parseInt(
                        $(abilityH2).parent()
                        .find('table').eq(0)
                        .find('td').eq(1)
                        .find('span').eq(8)
                        .html()
                        .replace(/[^0-9]/g, '')
                )
            }
                ,
            W: {
                name: $(abilityH2).parent()
                        .find('table').eq(1)
                        .find('td').eq(1)
                        .find('span').eq(0)
                        .find('span')
                        .html()
                ,
                mana: parseInt(
                        $(abilityH2).parent()
                        .find('table').eq(1)
                        .find('td').eq(1)
                        .children('span').eq(3)
                        .html()
                        .replace(/[^0-9]/g, '')
                )
                ,
                cooldown: parseInt(
                        $(abilityH2).parent()
                        .find('table').eq(1)
                        .find('td').eq(1)
                        .find('span').eq(5)
                        .html()
                        .replace(/[^0-9]/g, '')
                )
                ,
                damage: parseInt(
                        $(abilityH2).parent()
                        .find('table').eq(1)
                        .find('td').eq(1)
                        .find('span').eq(7)
                        .html()
                )
                ,
                damagePerLevel: parseInt(
                        $(abilityH2).parent()
                        .find('table').eq(1)
                        .find('td').eq(1)
                        .find('span').eq(8)
                        .html()
                        .replace(/[^0-9]/g, '')
                )
            }
                ,
            E: {
                name: $(abilityH2).parent()
                        .find('table').eq(2)
                        .find('td').eq(1)
                        .find('span').eq(0)
                        .find('span')
                        .html()
                ,
                mana: parseInt(
                        $(abilityH2).parent()
                        .find('table').eq(2)
                        .find('td').eq(1)
                        .children('span').eq(3)
                        .html()
                        .replace(/[^0-9]/g, '')
                )
                ,
                cooldown: parseInt(
                        $(abilityH2).parent()
                        .find('table').eq(2)
                        .find('td').eq(1)
                        .find('span').eq(5)
                        .html()
                        .replace(/[^0-9]/g, '')
                )
                ,
                damage: parseInt(
                        $(abilityH2).parent()
                        .find('table').eq(2)
                        .find('td').eq(1)
                        .find('span').eq(7)
                        .html()
                )
                ,
                damagePerLevel: parseInt(
                        $(abilityH2).parent()
                        .find('table').eq(2)
                        .find('td').eq(1)
                        .find('span').eq(8)
                        .html()
                        .replace(/[^0-9]/g, '')
                )
            }
            ,

        }

        var heroicAbilties = {

        R1: {
            herioc: $(heroicH2).parent()
                    .find('table').eq(0)
                    .find('td').eq(1)
                    .find('span').eq(0)
                    .find('span')
                    .html()
            ,
            mana: parseInt(
                    $(heroicH2).parent()
                    .find('table').eq(0)
                    .find('td').eq(1)
                    .children('span').eq(4)
                    .html()
                    .replace(/[^0-9]/g, '')
            )
            ,
            cooldown: parseInt(
                    $(heroicH2).parent()
                    .find('table').eq(0)
                    .find('td').eq(1)
                    .find('span').eq(6)
                    .html()
                    .replace(/[^0-9]/g, '')
            )
            ,
            damage: parseInt(
                    $(heroicH2).parent()
                    .find('table').eq(0)
                    .find('td').eq(1)
                    .find('span').eq(8)
                    .html()
            )
            ,
            damagePerLevel: parseInt(
                    $(heroicH2).parent()
                    .find('table').eq(0)
                    .find('td').eq(1)
                    .find('span').eq(9)
                    .html()
                    .replace(/[^0-9]/g, '')
            )
        }
            ,
        R2: {
            herioc: $(heroicH2).parent()
                    .find('table').eq(1)
                    .find('td').eq(1)
                    .find('span').eq(0)
                    .find('span')
                    .html()
            ,
            mana: parseInt(
                    $(heroicH2).parent()
                    .find('table').eq(1)
                    .find('td').eq(1)
                    .children('span').eq(4)
                    .html()
                    .replace(/[^0-9]/g, '')
            )
            ,
            cooldown: parseInt(
                    $(heroicH2).parent()
                    .find('table').eq(1)
                    .find('td').eq(1)
                    .find('span').eq(6)
                    .html()
                    .replace(/[^0-9]/g, '')
            )
            ,
            damage: parseInt(
                    $(heroicH2).parent()
                    .find('table').eq(1)
                    .find('td').eq(1)
                    .find('span').eq(8)
                    .html()
            )
            ,
            damagePerLevel: parseInt(
                    $(heroicH2).parent()
                    .find('table').eq(1)
                    .find('td').eq(1)
                    .find('span').eq(9)
                    .html()
                    .replace(/[^0-9]/g, '')
            )
        }


        }


        var hero = {
            nameId: heroNameId,
            title: "Hello",
            role: "Hello",
            franchise: "Hello",
            price: "Hello",
            health: parseInt(
                $(stats).parent()
                .find('table').eq(0)
                .find('tr').eq(0)
                .find('td').eq(1)
                .html()
            )
            ,
            hpPerLevel: parseInt(
                $(stats).parent()
                .find('table').eq(0)
                .find('tr').eq(0)
                .find('td').eq(2)
                .find('span')
                .html()
            )
            ,
            regen: parseFloat(
                $(stats).parent()
                .find('table').eq(0)
                .find('tr').eq(1)
                .find('td').eq(1)
                .html()
            )
            ,
            regenPerLevel: parseFloat(
                $(stats).parent()
                .find('table').eq(0)
                .find('tr').eq(1)
                .find('td').eq(2)
                .find('span')
                .html()
            )
            ,
            mana: parseInt(
                $(stats).parent()
                .find('table').eq(0)
                .find('tr').eq(2)
                .find('td').eq(1)
                .html()
            )
            ,
            manaPerLevel: parseInt(
                $(stats).parent()
                .find('table').eq(0)
                .find('tr').eq(2)
                .find('td').eq(2)
                .find('span')
                .html()
            )
            ,
            manaRegen: parseFloat(
                $(stats).parent()
                .find('table').eq(0)
                .find('tr').eq(3)
                .find('td').eq(1)
                .html()
            )
            ,
            manaRegenPerLevel: parseFloat(
                $(stats).parent()
                .find('table').eq(0)
                .find('tr').eq(3)
                .find('td').eq(2)
                .find('span')
                .html()
            )
            ,
            atkSpeed: $(stats).parent()
                .find('table').eq(0)
                .find('tr').eq(4)
                .find('td').eq(1).text()
            ,
            damage: parseInt(
                $(stats).parent()
                .find('table').eq(0)
                .find('tr').eq(5)
                .find('td').eq(1)
                .html()
            )
            ,
            damagePerLevel: parseInt(
                $(stats).parent()
                .find('table').eq(0)
                .find('tr').eq(5)
                .find('td').eq(2)
                .find('span')
                .html()
            )
            ,


            abilities: {
                basic: abilityData,
                heroic: heroicAbilties
            }


        }

        for(var i = 0; i < heroStats.length; i++) {
            if($(heroStats[i]).is('span') && $(heroStats[i]).text() == "Title:")
                hero.title = $(heroStats[i+1]).text().trim()
            if($(heroStats[i]).is('span') && $(heroStats[i]).text() == "Role:")
                hero.role = $(heroStats[i+1]).text().trim()
            if($(heroStats[i]).is('span') && $(heroStats[i]).text() == "Franchise:")
                hero.franchise = $(heroStats[i+1]).text().trim()
            if($(heroStats[i]).is('span') && $(heroStats[i]).text() == "Price:")
                hero.price = $(heroStats[i+1]).text().trim()
        }



        var updateHeroes = function(db, callback) {
            // Get the documents collection
            var collection = db.collection('heroes');
            collection.update(
                { nameId: hero.nameId },
                hero,
                { upsert: true }
            )
        }


        MongoClient.connect(url, function(err,db) {
            updateHeroes(db, function(heroes){
                console.dir(heroes);
            });
            db.close();
        });

    })
})
