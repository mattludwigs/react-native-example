import React, {
  View,
  Component,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  AlertIOS
} from 'react-native';

import cart from '../cart';

const styles = StyleSheet.create({
  container: {
    padding: 30,
    marginTop: 65,
    alignItems: "center"
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 100,
    marginTop: 50
  },
  addToCartButton: {
    paddingTop: 30
  }
});

class ProductView extends Component {
  constructor(props) {
    super(props)

    this.state = {
      product: this.props.product
    }
  }

  addToCart() {
    cart.add(this.state.product);
    AlertIOS.alert(`${this.state.product.name} has been added to cart costing $${this.state.product.price}`)
  }

  render() {
    if (!this.state.product) {
      return null;
    }

    return (
      <View style={styles.container}>
        <Text style={styles.header}>{this.state.product.name}</Text>
        <TouchableOpacity onPress={this.addToCart.bind(this)}>
          <Image style={styles.addToCartButton} source={require('../images/button-addtocart@2x.png')} />
        </TouchableOpacity>
      </View>
    );
  }
}

export default ProductView;
