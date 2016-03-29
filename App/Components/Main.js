import React, {
  View,
  Component,
  ListView,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity
} from 'react-native';

import ProductView from './ProductView';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  cellContainer: {
    flexDirection: 'row',
    height: 40,
    flex: 1,
    borderBottomColor: '#ccc',
    borderBottomWidth: 1

  },
  cellNavigator: {
    alignSelf: 'flex-end'
  }
});

class Main extends Component {

  constructor(props) {
    super(props)
    const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2}) 

    const products = [
      { name: "1907 Wall Set", iconPath: './App/images/image-cell1@2x.png', productImage: "phone-fullscreen1", price: 59.99 },
      { name: "1921 Dial Phone", iconPath: './App/images/image-cell2@2x.png', productImage: "phone-fullscreen1", price: 12.99 },
      { name: "1937 Desk Set", iconPath: './App/images/image-cell3@2x.png', productImage: "phone-fullscreen1", price: 39.99 },
    ];

    this.state = {
      products: ds.cloneWithRows(products),
    }
  }

  _handleNextButtonPress(product) {
    this.props.navigator.push({
      title: product.name,
      component: ProductView,
      passProps: { product }
    });
  }

  renderProduct(product) {
    const iconPath = product.iconPath;
    // <Image source={require('./App/images/image-cell1@2x.png')} />

    return (
      <TouchableOpacity onPress={this._handleNextButtonPress.bind(this, product)}>
        <View style={styles.contain}>
          <View style={styles.cellContainer}>
            <Text style={styles.cellText}>{product.name}</Text>
          </View>
          <View>
            <Text stye={styles.cellNavigator}>></Text>
          </View>
        </View>
      </TouchableOpacity>
    )
  }

  render() {
    if (this.state.products.length === 0) {
      return null;
    }
    return (
      <View style={styles.container}>
        <ListView 
          dataSource={this.state.products}
          renderRow={this.renderProduct.bind(this)}
          alwaysBounceVertical={true} />
      </View>
    );
  }
};

export default Main
