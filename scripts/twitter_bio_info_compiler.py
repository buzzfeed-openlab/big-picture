#!/usr/bin/env python
# encoding: utf-8
# import dependencies 
import tweepy #https://github.com/tweepy/tweepy
import csv

#Twitter API credentials, you can get them here https://apps.twitter.com/
consumer_key = ""
consumer_secret = ""
access_key = ""
access_secret = ""

#authorize twitter, initialize tweepy
auth = tweepy.OAuthHandler(consumer_key, consumer_secret)
auth.set_access_token(access_key, access_secret)
api = tweepy.API(auth)


# array of user names, replace them with your own choices
usernames = [
"buzzfeed",
"buzzfeednews",
"openlab"
]


# open spreadsheet and add column heads
with open('userinfo.csv', 'wb') as f:
		writer = csv.writer(f)
		writer.writerow(["name",
					"display_name",
					"bio",
					"followers_count", 
					"following_count",
					"acct_created", 
					"location"])
pass

def get_userinfo(name):
	#set user to be the screen_name
	user = api.get_user(screen_name = name)

	# create row
	userinfo = [name.encode('utf-8'),
				user.name.encode('utf-8'), 
				user.description.encode('utf-8'),
				user.followers_count,
				user.friends_count,
				user.created_at,
				user.location.encode('utf-8')]
	print userinfo

	# write the csv	
	with open('userinfo.csv', 'a') as f:
		writer = csv.writer(f)
		writer.writerows([userinfo])
	pass

# for each username run the function
for name in usernames:
	get_userinfo(name)
