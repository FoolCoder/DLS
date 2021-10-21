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

export default function PDFtron({ navigation }) {
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

    const tools = [Config.DefaultToolbars.Annotate, myToolbar]

    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut)

    return (
      <View style={styles.mainView}>
        <View style={styles.mainActivityView}>
          <View style={{ height: height(3), width: width(95), alignSelf: 'center', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>

            <View style={{ width: width(8) }}>

              <Image
                style={{ height: 30, width: 30 }}
                source={pdfsquare}
              />

            </View>

            <View style={{ flexDirection: 'row' }}>

              <TouchableOpacity
                onPress={() => this.setState({
                  type: 1
                })}
                style={{ height: height(3), width: width(10), justifyContent: 'center', alignItems: 'center', borderTopLeftRadius: 5, borderTopRightRadius: 5, backgroundColor: this.state.type == 1 ? '#fff' : null }}
              >

                <Text style={{ fontSize: totalSize(1) }}>
                  Tools
              </Text>

              </TouchableOpacity>


              <TouchableOpacity
                onPress={() => this.setState({
                  type: 2
                })}
                style={{ height: height(3), width: width(10), justifyContent: 'center', alignItems: 'center', borderTopLeftRadius: 5, borderTopRightRadius: 5, backgroundColor: this.state.type == 2 ? '#fff' : null }}
              >

                <Text style={{ fontSize: totalSize(1) }}>
                  Add-ons
              </Text>

              </TouchableOpacity>

            </View>

            <View style={{ flexDirection: 'row', width: width(8) }}>

              <Image
                style={{ height: 30, width: 30, marginRight: width(2) }}
                source={pdfsearch}
              />

              <Image
                style={{ height: 30, width: 30 }}
                source={pdfchat}
              />

            </View>

          </View>

          {this.state.type == 2 ?
            <View style={{ height: height(32), width: width(100), marginTop: height(3), justifyContent: 'center', alignItems: 'center', position: 'absolute', zIndex: 1, backgroundColor: '#fff' }}>

              <View style={{ width: width(85), flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>

                <View style={{ height: height(11), width: width(40) }}>

                  <Text style={{ fontSize: totalSize(1) }}>

                    3D Objects, images

                  </Text>

                  <ScrollView
                    style={{ width: width(40), marginTop: height(0.5), flexDirection: 'row' }}
                    contentContainerStyle={{ alignItems: 'center' }}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                  >

                    {this.state.OIA.map((e, i, a) => {
                      return (

                        <View style={{ width: width(9), marginRight: width(1) }}>

                          <View style={{
                            height: 85, width: 85, justifyContent: 'center', alignItems: 'center',
                            shadowColor: "#000",
                            shadowOffset: {
                              width: 0,
                              height: 2,
                            },
                            shadowOpacity: 0.25,
                            shadowRadius: 3.84,

                            elevation: 5
                          }}>

                            <Image
                              style={{ height: 80, width: 80, borderColor: '#000' }}
                              source={e.image}
                            />

                          </View>

                          <Text style={{ fontSize: totalSize(0.8), width: width(8.3), textAlign: 'center' }}>
                            {e.name}
                          </Text>

                        </View>


                      )
                    })}

                  </ScrollView>


                </View>

                <View style={{ height: height(11), width: width(40) }}>

                  <Text style={{ fontSize: totalSize(1) }}>

                    Images

                 </Text>

                  <ScrollView
                    style={{ width: width(40), marginTop: height(0.5), flexDirection: 'row' }}
                    contentContainerStyle={{ alignItems: 'center' }}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                  >

                    {this.state.IA.map((e, i, a) => {
                      return (

                        <View style={{ width: width(9), marginRight: width(1) }}>

                          <View style={{
                            height: 85, width: 85, justifyContent: 'center', alignItems: 'center',
                            shadowColor: "#000",
                            shadowOffset: {
                              width: 0,
                              height: 2,
                            },
                            shadowOpacity: 0.25,
                            shadowRadius: 3.84,

                            elevation: 5
                          }}>

                            <Image
                              style={{ height: 80, width: 80, borderColor: '#000' }}
                              source={e.image}
                            />

                          </View>

                          <Text style={{ fontSize: totalSize(0.8), width: width(8.3), textAlign: 'center' }}>
                            {e.name}
                          </Text>

                        </View>


                      )
                    })}

                  </ScrollView>


                </View>

              </View>

              <View style={{ width: width(85), marginTop: height(2), flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>

                <View style={{ height: height(11), width: width(40) }}>

                  <Text style={{ fontSize: totalSize(1) }}>

                    3D Objects

                  </Text>

                  <ScrollView
                    style={{ width: width(40), marginTop: height(0.5), flexDirection: 'row' }}
                    contentContainerStyle={{ alignItems: 'center' }}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                  >

                    {this.state.OA.map((e, i, a) => {
                      return (

                        <View style={{ width: width(9), marginRight: width(1) }}>

                          <View style={{
                            height: 85, width: 85, justifyContent: 'center', alignItems: 'center',
                            shadowColor: "#000",
                            shadowOffset: {
                              width: 0,
                              height: 2,
                            },
                            shadowOpacity: 0.25,
                            shadowRadius: 3.84,

                            elevation: 5
                          }}>

                            <Image
                              style={{ height: 80, width: 80, borderColor: '#000' }}
                              source={e.image}
                            />

                          </View>

                          <Text style={{ fontSize: totalSize(0.8), width: width(8.3), textAlign: 'center' }}>
                            {e.name}
                          </Text>

                        </View>


                      )
                    })}

                  </ScrollView>


                </View>

                <View style={{ height: height(11), width: width(40) }}>

                  <Text style={{ fontSize: totalSize(1) }}>

                    Videos and Sounds

                 </Text>

                  <ScrollView
                    style={{ width: width(40), marginTop: height(0.5), flexDirection: 'row' }}
                    contentContainerStyle={{ alignItems: 'center' }}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                  >

                    {this.state.VSA.map((e, i, a) => {
                      return (

                        <View style={{ width: width(9), marginRight: width(1) }}>

                          <View style={{
                            height: 85, width: 85, justifyContent: 'center', alignItems: 'center',
                            shadowColor: "#000",
                            shadowOffset: {
                              width: 0,
                              height: 2,
                            },
                            shadowOpacity: 0.25,
                            shadowRadius: 3.84,

                            elevation: 5
                          }}>

                            <Image
                              style={{ height: 80, width: 80, borderColor: '#000' }}
                              source={e.image}
                            />

                          </View>

                          <Text style={{ fontSize: totalSize(0.8), width: width(8.3), textAlign: 'center' }}>
                            {e.name}
                          </Text>

                        </View>


                      )
                    })}

                  </ScrollView>


                </View>

              </View>

            </View>

            : null}
          <DocumentView
            ref={(c) => this._viewer = c}
            // hideDefaultAnnotationToolbars={[Config.DefaultToolbars.Annotate]}
            collabEnabled
            annotationToolbars={[Config.DefaultToolbars.Annotate]}
            hideAnnotationToolbarSwitcher={false}
            hideTopToolbars={false}
            hideTopAppNavBar={false}
            document={path}
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

          {this.state.visiableBlank == false ?

            <TouchableOpacity
              onPress={() => this.setState({
                visiableBlank: true
              })}
              style={{ position: 'absolute', zIndex: 1, bottom: 0, right: width(10) }}
            >

              <Image
                source={pdfblank}
                style={{ height: 50, width: 100 }}
              />

            </TouchableOpacity>

            :
            <View style={{ height: this.state.visiableBlankHight }}>

              <TouchableOpacity
                onPress={() => {

                  if (this.state.visiableBlankHight == height(30)) {
                    this.setState({ visiableBlankHight: height(70) })
                  }
                  if (this.state.visiableBlankHight == height(70)) {
                    this.setState({ visiableBlankHight: height(30) })
                  }
                }}
                style={{ position: 'absolute', zIndex: 1, top: height(1), marginHorizontal: width(48) }}
              >

                <Image
                  style={{ height: 30, width: 30 }}
                  source={pdfblanksize}
                />

              </TouchableOpacity>

              <DocumentView
                ref={(c) => this._viewerBlank = c}
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
                onLeadingNavButtonPressed={() => this.setState({ visiableBlank: false })}
                onDocumentLoaded={this.onDocumentLoadedBlank}
                onAnnotationChanged={this.onAnnotationChangedBlank}
                onExportAnnotationCommand={this.onExportAnnotationCommandBlank}
                onZoomChanged={this.onZoomChangedBlank}
                readOnly={false}
                disabledElements={[Config.Buttons.userBookmarkListButton]}
                disabledTools={[Config.Tools.annotationCreateLine, Config.Tools.annotationCreateRectangle]}
                // fitMode={Config.FitMode.FitPage}
                layoutMode={Config.LayoutMode.Continuous}
              />

            </View>
          }

        </View>
      </View >
    );
  }
}
