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
  day: {
    width: 90,
    height: 80
  },
  week: {
      flexDirection: 'row',
  },
  weeks: {
      flexDirection: 'column',
  },
  day_green: {
      backgroundColor: "#9f9",
      height: 90,
      width: 80
  },
  day_yellow: {
      backgroundColor: "#9ff",
      height: 90,
      width: 80
  },
  day_red: {
      backgroundColor: "#f99",
      height: 90,
      width: 80
  },
  day_blue: {
      backgroundColor: "#99f",
      height: 90,
      width: 80
  },
});

Font.register(`${__dirname}/fonts/Roboto-Regular.ttf`, { family: 'Roboto' });
Font.register(
  'https://fonts.gstatic.com/s/oswald/v13/Y_TKV6o8WovbUd3m_X9aAA.ttf',
  { family: 'Oswald' },
);

const Day = ({date}) => {
    let month = date.month() + 1
    if ( month % 4 === 1 ) {
        return (
            <Text style={styles.day_green}>{date.date()}</Text>
        )
    } else if ( month % 4 === 2 ) {
        return (
            <Text style={styles.day_yellow}>{date.date()}</Text>
        )
    } else if ( month % 4 === 3 ) {
        return (
            <Text style={styles.day_red}>{date.date()}</Text>
        )
    } else {
        return (
            <Text style={styles.day_blue}>{date.date()}</Text>
        )
    }

}

const Week = ({startDate}) => {
    let days = []
    for (let i=0; i < 7; i++) {
        days.push(moment(startDate).add(i, 'days'));
    }
    return (
        <View style={styles.week}>
            {days.map((date) => <Day key={date} date={date} />)}
        </View>
    )
}

const MonthCol = ({startDate, weekCount}) => {
    let weeks = []
    for (let i=0; i < weekCount; i++) {
        weeks.push(moment(startDate).add(i * 7, 'days'));
    }
    function showWeeks() {
        return (
            <View style={styles.weeks}>
                {weeks.map((date) => <Week key={date} startDate={date} />)}
            </View>
        )
    }

    return (
        <View>
            {showWeeks()}
        </View>
    );
};

export default MonthCol
