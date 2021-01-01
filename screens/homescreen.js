import * as React from 'react';
import { Text, TextInput, TouchableOpacity, View, StyleSheet } from 'react-native';
import dictionary from '../database';

export default class HomeScreen extends React.Component {
    constructor() {
        super();
        this.state = {
            text: '',
            word: '',
            definition: '',
            lexicalCategory: '',
            isSearchPressed: false,
        }
    }

    getWord = (word) => {
        var wordSearch = word.toLowerCase();

        try {
            var definition = dictionary[wordSearch]['definition'];
            var lexicalCategory = dictionary[wordSearch]['lexicalCategory'];

            this.setState({
                'word': this.state.text,
                'definition': definition,
                'lexicalCategory': lexicalCategory,
            });
        }
        catch (err) {
            this.setState({
                word: this.state.text,
                definition: 'Not found.',
            });
        }
    };


    render() {
        return (
            <View style={{ backgroundColor: '#F2C57C' }}>
                <View style={styles.searchContainer}>
                    <TextInput
                        style={styles.inputBox}
                        onChangeText={text => {
                            this.setState({
                                text: text,
                                word: 'Loading',
                            });
                        }}
                        value={this.state.text} />

                    <TouchableOpacity
                        style={styles.searchButton}
                        onPress={() => {
                            this.setState({
                                isSearchPressed: true,
                            });
                            this.getWord(this.state.text);
                        }}>
                        <Text style={{ fontSize: 25, color: 'grey', }}>Search</Text>
                    </TouchableOpacity>
                </View>

                <View>
                    <Text style={styles.text}>
                        Word:
                    </Text>

                    <Text>
                        {this.state.text}
                    </Text>

                    <Text style={styles.text}>
                        Definition:
                    </Text>

                    <Text>
                        {this.state.definition}
                    </Text>

                    <Text style={styles.text}>
                        Lexical Category:
                    </Text>

                    <Text>
                        {this.state.lexicalCategory}
                    </Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    searchContainer: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputBox: {
        alignSelf: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        width: '80%',
        height: 40,
        fontSize: 20,
        marginBottom: 40,
        borderWidth: 2,
        borderColor: 'black',
        marginTop: 50,
    },
    searchButton: {
        alignSelf: 'center',
        justifyContent: 'center',
        width: '60%',
        borderRadius: 100,
        padding: '20px',
        backgroundColor: '#DDAE7E',
        textAlign: 'center',
    },
    text: {
        color: 'purple',
        fontSize: 24,
    },
});