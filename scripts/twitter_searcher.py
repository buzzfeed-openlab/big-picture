#!/usr/bin/env python
# encoding: utf-8

import tweepy #https://github.com/tweepy/tweepy
import csv
import time


#Twitter API credentials, you can get them here https://apps.twitter.com/
consumer_key = ""
consumer_secret = ""
access_key = ""
access_secret = ""

#authorize twitter, initialize tweepy
auth = tweepy.OAuthHandler(consumer_key, consumer_secret)
auth.set_access_token(access_key, access_secret)
api = tweepy.API(auth)

# Twitter API limit handler; this helps you deal with the fact that Twitter only allows you to ping its API a set number of times 
def limit_handled(cursor):
    while True:
        try:
            yield cursor.next()
        except tweepy.error.TweepError:
            print "waiting 15 minutes for Twitter to let me get more tweets ᕕ( ᐛ )ᕗ"
            time.sleep(15 * 60)

# counter for console messages 
counter  = 0;

# search terms
# find a full list of conventions here: https://dev.twitter.com/rest/public/search#query-operators
searchterm = "\"Queen Bey\""

# Open/Create a file to append data
csvFile = open('%s-result.csv' % searchterm, 'a')
#Use csv Writer
csvWriter = csv.writer(csvFile)
# these are the headers of your csv
csvWriter.writerow(["id", 
                    "authorname",
                    "created_at",
                    "favorites",
                    "retweets",
                    "text"])

# loop to put tweets into the csv
for tweet in limit_handled(tweepy.Cursor(api.search,
                    q=searchterm,
                    # note that Twitter only makes available a sample of tweets from the last 7 days: https://dev.twitter.com/rest/public/search
                    # point of time you want the search to start 
                    since="2017-01-10",
                    # point of time you want the search to end
                    until="2017-02-02",
                    lang="en").items()):
    #Write a row to the csv file/ I use encode utf-8
    csvWriter.writerow([tweet.id_str, 
                        tweet.author.screen_name,
                        tweet.created_at,
                        tweet.favorite_count,
                        tweet.retweet_count, 
                        tweet.text.encode("utf-8")])
    # this code prints information in your console while you're getting tweets
    counter += 1
    if counter % 100 == 0:
        print  "%s tweets collected" % counter

# close the file
csvFile.close()
