/* eslint react/prop-types: 0 */
/* eslint react/jsx-sort-props: 0 */

import React from 'react';
import ReactPDF from '@react-pdf/node';
import moment from 'moment'
import {
  Document,
  Page,
  View,
  Text,
  Link,
  Font,
  StyleSheet,
} from '@react-pdf/core';

const styles = StyleSheet.create({
  title: {
    margin: 20,
    fontSize: 25,
    align: 'center',
    backgroundColor: '#e4e4e4',
    textDecoration: 'underline',
    textTransform: 'uppercase',
    fontFamily: 'Roboto',
  },
  body: {
    padding: 54,
    flexGrow: 1,

  },
  row: {
    flexGrow: 1,
    flexDirection: 'row',
  },
  rowYear: {
    height: 100,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  rowCalendar: {
    height: 100,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  year: {
    color: '#aaa',
    fontSize: 44,
    textAlign: 'center',
    flexGrow: 1,
    width: 100
  },
  gutter: {
    width: 88,
  },
  block: {
    flexGrow: 1,
  },
  text: {
    flexGrow: 3,
    margin: 10,
    fontFamily: 'Oswald',
  },
  monthCol: {
      width: 766,
      backgroundColor: '#990000'
  },
});

Font.register(`${__dirname}/fonts/Roboto-Regular.ttf`, { family: 'Roboto' });
Font.register(
  'https://fonts.gstatic.com/s/oswald/v13/Y_TKV6o8WovbUd3m_X9aAA.ttf',
  { family: 'Oswald' },
);

const Day = ({startDate}) => {
    return (
            <Text>{startDate.weekday()}</Text>
    )
}

const MonthCol = ({startDate, weeks}) => {
    let dates = []
    for (let i=0; i < 7; i++) {
        dates.push(moment(startDate).add(i, 'days'));
    }
    function showWeekday() {
        return (
            <View>
                {dates.map((date) => <Day key={date} startDate={date} />)}
            </View>
        )
    }

    return (
        <View>
            {showWeekday()}
        </View>
    );
};

export default MonthCol
