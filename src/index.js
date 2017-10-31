import React from 'react';
import {
  Text,
  Document,
  Font,
  Page,
  StyleSheet,
  Image,
  View,
} from '@react-pdf/core';
import ReactPDF from '@react-pdf/node';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  image: {
    marginBottom: 10,
  },
  leftColumn: {
    flexDirection: 'column',
    width: 170,
    marginLeft: 30,
    marginRight: 15,
    marginTop: 20,
  },
  rightColumn: {
    flexDirection: 'column',
    flexGrow: 1,
    marginLeft: 15,
    marginRight: 30,
    marginTop: 20,
  },
  footer: {
    fontSize: 12,
    fontFamily: 'Lato Bold',
    align: 'center',
    marginTop: 25,
    marginHorizontal: 30,
    paddingVertical: 10,
    borderWidth: 3,
    borderColor: 'gray',
    borderStyle: 'dashed',
  },
});

const Resume = () => (
  <Document
    author="Luke Skywalker"
    keywords="awesome, resume, start wars"
    subject="The resume of Luke Skywalker"
    title="Resume"
  >
    <Page size="A4">
      <Text style={styles.footer}>
        This IS the candidate you are looking for
      </Text>
    </Page>
  </Document>
);

ReactPDF.render(<Resume />, `${__dirname}/output.pdf`);
