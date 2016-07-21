#Loads a dictionary, loads a list of words, then saves the words that are common to both files.
#This version saves words that are saved as saves as postfix-less subwords in the lyric list.append
#i.e. 'leav' in the lyric list will match to 'leave' and 'leaving' in the dictionary.

import json

def findVariants(wordStart):

    return variants

#Load dictionary (line delimited)
dictionary = set()
for line in open('englishDictionary.txt').readlines():
    dictionary.add(line.split('\n')[0])

#Load lyric word list when words are line delimited and each line has some junk after the word
lyricWords = set()
for line in open('5000unstemmedWords.txt', encoding='utf8').readlines():
    lyricWords.add(line.split('>')[0].split('/n')[0])

#Load lyric word list when words are comma delimited
# lyricWords = set(open('mxm_dataset_train.txt').readline().split(','))

wordsInCommon = dictionary.intersection(dictionary, lyricWords)
print('# of words: ' + str(len(wordsInCommon)))
js = open('commonWords.json', 'w')
js.write(json.dumps(list(wordsInCommon)))