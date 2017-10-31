/* eslint react/prop-types: 0 */
/* eslint react/jsx-sort-props: 0 */

import React from 'react';
import ReactPDF from '@react-pdf/node';
import moment from 'moment';
import {
  Document,
  Page,
  View,
  Text,
  Link,
  Font,
  StyleSheet,
} from '@react-pdf/core';
import MonthCol from './monthCol'

const STARTDATE1 = moment().dayOfYear(1)
const STARTDATE2 = moment().dayOfYear(186)

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

const doc = (
  <Document>
    <Page size="P24X36">
      <View style={styles.body}>
          <View style={styles.rowYear}>
              <View>
                  <Text style={styles.year}>2018</Text>
              </ View>
          </View>
        <View style={styles.rowCalendar}>
          <View style={styles.monthCol}>
            <MonthCol startDate={STARTDATE1} weeks={26}/>
          </View>
          <View style={styles.gutter} />
          <View style={styles.monthCol}>
            <MonthCol startDate={STARTDATE2} weeks={26}/>
          </View>
        </View>
      </View>
    </Page>
  </Document>
);

ReactPDF.render(doc, `${__dirname}/output.pdf`);
