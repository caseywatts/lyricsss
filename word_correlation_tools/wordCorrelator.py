#Loads a dictionary, loads a list of words, then saves the words that are common to both files.

import json

#Load dictionary (line delimited)
dictionary = set()
for line in open('englishDictionary.txt').readlines():
    dictionary.add(line.split('\n')[0])

#Load lyric word list when words are line delimited
lyricWords = set()
for line in open('5000unstemmedWords.txt', encoding='utf8').readlines():
    lyricWords.add(line.split('>')[1].split('\n')[0])

#Load lyric word list when words are comma delimited
frequencyDictionary = set()
frequencyDictionary = set(open('5000MostCommonLyricWords.txt').readline().split(',')[0:1000])


wordsInCommon = dictionary.intersection(dictionary, frequencyDictionary)
wordsInCommon = dictionary.intersection(wordsInCommon, lyricWords)
print('# of words: ' + str(len(wordsInCommon)))
js = open('commonWords.json', 'w')
js.write(json.dumps(list(wordsInCommon)))