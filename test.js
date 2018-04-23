const assert = require('assert')
const mongoose = require('mongoose')
const tweetCtrl = require('./controller/tweetCtrl')


mongoose.connect('mongodb://kuken:rbra@212.47.237.59:27017/social_net');



describe('Int Test #1', function(){
    it('Should return number of distinct users in DB', function(){
        this.timeout(30000);
        return tweetCtrl.getDistinctUserCount()
        .then(users => {
            console.log(users.length)
            assert.equal(users.length, 659774)
           
        })


    })



})
