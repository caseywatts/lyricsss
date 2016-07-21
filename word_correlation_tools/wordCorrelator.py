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
# lyricWords = set(open('mxm_dataset_train.txt').readline().split(','))

wordsInCommon = dictionary.intersection(dictionary, lyricWords)
print('# of words: ' + str(len(wordsInCommon)))
js = open('commonWords.json', 'w')
js.write(json.dumps(list(wordsInCommon)))