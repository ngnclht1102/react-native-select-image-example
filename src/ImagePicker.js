import React from 'react'
import { View, Button, Image, ActivityIndicator } from 'react-native'
import ImagePicker from 'react-native-image-picker'
import styles from './imagePicker.styles'

const options = {
  title: 'Select image of your avatar',
  storageOptions: {
    skipBackup: true,
    path: 'images',
  },
}

class AvatarPicker extends React.Component {
  constructor(props) {
    super(props)

    this.onPickImage = this.onPickImage.bind(this)
    this.onReset = this.onReset.bind(this)

    this.state = {
      avatar: null,
    }
  }

  onPickImage() {
    ImagePicker.showImagePicker(options, response => {
      if (!response.didCancel && !response.error) {
        const source = { uri: response.uri }
        this.setState({
          avatar: source,
        })
      }
    })
  }

  onReset() {
    this.setState({
      avatar: null,
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <Button
          onPress={this.onPickImage}
          title="Select your avatar"
          color="#841584"
        />
        { this.state.avatar && this.renderImageView() }
      </View>
    )
  }

  renderImageView() {
    return (
      <View>
        <Image style={styles.image} source={this.state.avatar} />
        <Button
          onPress={this.onReset}
          title="Remove"
          color="#841584"
        />
      </View>
    )
  }
}


AvatarPicker.propTypes = {
  act: React.PropTypes.object.isRequired,
  selectedCustomer: React.PropTypes.object,
}

export default AvatarPicker
