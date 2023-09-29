# @bot.event
# async def on_message(message):
#     if message.author == bot.user:
#         return
#     # type $test to test the db connection
#     if message.content.startswith('$test'):
#         await message.channel.send('Hello!')
#         await message.channel.send(message.author)
#         # Find user in database
#         dbuser = database.findUser(str(message.author))
#         if dbuser is not None:
#             print(dbuser)
#         else:
#             print("Insert new user")
#             user = {"_id": str(message.author)}
#             database.insertUser(user)
#     # other commands go here
#     if message.content.startswith('$help'):
#         await message.channel.send('Hello! This is the content of help command')
