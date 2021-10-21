import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  PermissionsAndroid,
  BackHandler,
  Alert,
  ScrollView,
  Image,
  TouchableOpacity,
  LayoutAnimation
} from 'react-native';

import { DocumentView, PDFViewCtrl, RNPdftron, Config } from 'react-native-pdftron';

import AsyncStorage from '@react-native-async-storage/async-storage'

import { styles } from '../styles/styles'
import { height, totalSize, width } from 'react-native-dimension';

import pdf from '../../assets/pdf.png'
import pdfsquare from '../../assets/pdfsquare.png'
import pdfchat from '../../assets/pdfchat.png'
import pdfsearch from '../../assets/pdfsearch.png'
import pdfblank from '../../assets/pdfblank.png'
import pdfblanksize from '../../assets/pdfblanksize.png'
import addonimage from '../../assets/addonimage.png'
import addon3d from '../../assets/addon3d.png'
import addonaudio from '../../assets/addonaudio.png'

export default function PDFtronNotebook({ navigation }) {
  return (
    <App
      back={() => navigation.goBack()}
    />
  )
}

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      type: 1,
      OIA: [{ name: 'Biology note', image: pdf }, { name: 'Biology note', image: pdf }, { name: 'Biology note', image: pdf }, { name: 'Biology note', image: pdf }],
      IA: [{ name: 'Nature', image: addonimage }, { name: 'Nature', image: addonimage }, { name: 'Nature', image: addonimage }, { name: 'Nature', image: addonimage }],
      OA: [{ name: 'Virus', image: addon3d }, { name: 'Virus', image: addon3d }, { name: 'Virus', image: addon3d }, { name: 'Virus', image: addon3d }],
      VSA: [{ name: 'Molecules', image: addonaudio }, { name: 'Molecules', image: addonaudio }, { name: 'Molecules', image: addonaudio }, { name: 'Molecules', image: addonaudio }],
      pageNumber: 0,
      blankAnnotation: [],
      visiableBlank: false,
      visiableBlankHight: height(30)
    }

    RNPdftron.initialize("");
  }

  onDocumentLoaded = async () => {
    if (this._viewer) {

      let val = await AsyncStorage.getItem('pdf')

      if (val) {
        const xfdf = val

        this._viewer.importAnnotations(xfdf)
      }

    }
  }

  onAnnotationChanged = async ({ action, annotations }) => {
    // console.log('action', action);
    // console.log('annotations', annotations);
    if (this._viewer) {
      this._viewer.exportAnnotations().then(async (xfdf) => {
        await AsyncStorage.setItem('pdf', xfdf)
      })
    }
  }

  onZoomChanged = ({ zoom }) => {
    console.log('zoom', zoom);
  }

  onExportAnnotationCommand = ({ action, xfdfCommand }) => {
    // console.log('action', action);
    // console.log('xfdfCommand', xfdfCommand);
  }

  pageChanged = (e) => {
    this.setState({ pageNumber: e.pageNumber })
    if (this._viewerBlank) {
      if (this.state.blankAnnotation[e.pageNumber - 1]) {
        this._viewerBlank.importAnnotations(this.state.blankAnnotation[e.pageNumber - 1])
      }
      else {
        let val = `<?xml version="1.0" encoding="UTF-8"?>
        <xfdf xmlns="http://ns.adobe.com/xfdf/" xml:space="preserve">
          <pages>
            <defmtx matrix="1.333333,0.000000,0.000000,-1.333333,0.000000,1056.000000" />
          </pages>
          <pdf-info import-version="3" version="2" xmlns="http://www.pdftron.com/pdfinfo" />
        </xfdf>`
        this._viewerBlank.importAnnotations(val)
      }
    }
  }

  onDocumentLoadedBlank = async () => {
    if (this._viewerBlank) {

      let val = JSON.parse(await AsyncStorage.getItem('pdfArray'))

      if (val) {
        this.setState({ blankAnnotation: val })
        const xfdf = val[this.state.pageNumber - 1]

        if (xfdf) {
          // console.log(xfdf)
          this._viewerBlank.importAnnotations(xfdf)
        }

      }

    }
  }

  onAnnotationChangedBlank = async ({ action, annotations }) => {
    // console.log('action', action);
    // console.log('annotations', annotations);
    if (this._viewerBlank) {
      this._viewerBlank.exportAnnotations().then(async (xfdf) => {

        let val = JSON.parse(await AsyncStorage.getItem('pdfArray'))

        if (val) {
          val[this.state.pageNumber - 1] = xfdf
        }
        else {
          val = [xfdf]
        }

        await AsyncStorage.setItem('pdfArray', JSON.stringify(val))
      })
    }
  }

  onZoomChangedBlank = ({ zoom }) => {
    console.log('zoom', zoom);
  }

  onExportAnnotationCommandBlank = ({ action, xfdfCommand }) => {
    // console.log('action', action);
    // console.log('xfdfCommand', xfdfCommand);
  }


  render() {
    const path = "https://pdftron.s3.amazonaws.com/downloads/pl/PDFTRON_about.pdf";
    const myToolbar = {
      [Config.CustomToolbarKey.Id]: 'myToolbar',
      [Config.CustomToolbarKey.Name]: 'myToolbar',
      [Config.CustomToolbarKey.Icon]: Config.ToolbarIcons.FillAndSign,
      [Config.CustomToolbarKey.Items]: [Config.Tools.annotationCreateArrow, Config.Tools.annotationCreateCallout, Config.Buttons.undo]
    };

    return (
      <View style={styles.mainView}>
        <View style={styles.mainActivityView}>

          <DocumentView
            ref={(c) => this._viewer = c}
            // hideDefaultAnnotationToolbars={[Config.DefaultToolbars.Annotate]}
            collabEnabled
            annotationToolbars={[Config.DefaultToolbars.Annotate]}
            hideAnnotationToolbarSwitcher={false}
            hideTopToolbars={false}
            hideTopAppNavBar={false}
            document={'https://www.med.unc.edu/webguide/files/2019/07/AdobePDF.pdf'}
            padStatusBar={true}
            showLeadingNavButton={true}
            leadingNavButtonIcon={Platform.OS === 'ios' ? 'ic_close_black_24px.png' : 'ic_arrow_back_white_24dp'}
            onPageChanged={(e) => this.pageChanged(e)}
            onLeadingNavButtonPressed={this.props.back}
            onDocumentLoaded={this.onDocumentLoaded}
            onAnnotationChanged={this.onAnnotationChanged}
            onExportAnnotationCommand={this.onExportAnnotationCommand}
            onZoomChanged={this.onZoomChanged}
            readOnly={false}
            disabledElements={[Config.Buttons.userBookmarkListButton]}
            disabledTools={[Config.Tools.annotationCreateLine, Config.Tools.annotationCreateRectangle]}
            // fitMode={Config.FitMode.FitPage}
            layoutMode={Config.LayoutMode.Continuous}
          />

        </View>

      </View >
    );
  }
}
