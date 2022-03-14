import {
  StyleSheet,
  Text,
  View,
  Image,
  StatusBar,
  TouchableOpacity,
  TextInput,
  FlatList,
  ImageBackground,
  Dimensions,
} from 'react-native';
import React, {useState} from 'react';
import Modal from 'react-native-modal';
import ImagePicker from 'react-native-image-crop-picker';

import {background,iconback2, twitter, iconSearch, VinhNguyen, iconMess2, iconCloes, iconWrong2, iconWrong1, iconFriend} from '../../Assets';
const {height} = Dimensions.get('window');

const Array = [
  {
    id: 1,
    name: 'Nguyen Vinh',
    title: '130 ban chung',
  },
  {
    id: 2,
    name: 'Su phu',
    title: '120 ban chung',
  },
  {
    id: 3,
    name: 'Hi hi !',
    title: '190 ban chung',
  },
  {
    id: 4,
    name: 'Ha ha !',
    title: '150 ban chung',
  },
  {
    id: 5,
    name: 'He he',
    title: '160 ban chung',
  },
];

const Detail = () => {
  const [isModalVisible, setModalVisible] = useState(false);
  const [name, setName] = useState('');
  const [image, setImage] = useState('https://static.topcv.vn/avatars/QRVnjwk0LezxZEWkQwTs_61e023815645f_cvtpl.jpg?1647170991');

  const takePhoto = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true,
    }).then(image => {
      console.log(image);
      setImage(image.path);
    });
  };

  const toggleModal = name => {
    setName('Su phu');
    setModalVisible(!isModalVisible);
  };

  const renderItem = ({item, index}) => {
    return (
      <View style={styles.item}>
        <TouchableOpacity onPress={takePhoto}>
          <Text style={{paddingLeft: 100, color: '#fff', fontSize: 38 / 2, fontStyle: 'italic', fontWeight: '400',}}>
            {item.name}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={takePhoto}>
          <Text style={{paddingLeft: 100, color: '#333', fontStyle: 'italic', fontWeight: '400',}}>{item.title}</Text>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <ImageBackground 
        source={background}
        resizeMode="cover"
        style={styles.image}>
      
      <StatusBar
          barStyle="dark-content"
          hidden={true}
      />
        
      <View style={styles.header}>
        <Image style={styles.icon} source={iconback2} />
        <Text style={styles.content}>Bạn bè của Trung Tín</Text>
        <TouchableOpacity>
          <Image style={styles.iconAdd1} source={twitter} />
        </TouchableOpacity>
      </View>
      <View
        style={{
          width: 400,
          height: 1,
          borderWidth: 1,
          borderColor: '#222',
          marginTop: 16,
        }}></View>
      <View style={styles.btnContent}>
        <TouchableOpacity style={styles.btn}>
          <Text style={{...TEXT, fontSize: 16, fontStyle: 'italic', fontWeight: '400',}}>Tất cả</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn}>
          <Text style={{...TEXT, fontSize: 16, fontStyle: 'italic', fontWeight: '400',}}>Gần đây</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.Search}>
        <TextInput
          style={styles.input}
          placeholder="Tìm kiếm bạn bè"
          fontWeight="400"
          placeholderTextColor="#333"
          autoFocus={true}
        />
        <Image style={styles.iconSearch} source={iconSearch} />
      </View>
      <View>
        <FlatList
          data={Array}
          renderItem={renderItem}
          keyExtractor={(item, index) => `${item.id} ${index}`}
          style={{position: 'absolute'}}
        />
        <View style={styles.body}>
          <Image style={styles.avatar} source={VinhNguyen} />
          <Modal
            isVisible={isModalVisible}
            animationIn="slideInUp"
            animationOut="slideOutDown">
            <View
              style={{
                backgroundColor: '#333',
                borderRadius: 24,
                width: '100%',
                height: '60%',
                marginTop: 320,
              }}>
              
              <View style={{flexDirection: 'row'}}>
                <Image
                  style={{
                    position: 'absolute',
                    width: 48,
                    height: 50,
                    marginLeft:12,
                    marginTop: 12,
                  }}
                  source={iconFriend}
                />
                <Text
                  onPress={() => toggleModal(false)}
                  style={styles.txtModal}>
                  {' '}
                  {`Xem bạn bè của: ${name}`}
                </Text>
              </View>

              <View style={{flexDirection: 'row'}}>
                <Image
                  style={{
                    position: 'absolute',
                    width: 48,
                    height: 50,
                    marginLeft:12,
                    marginTop: 12,
                  }}
                  source={iconMess2}
                />
                <Text
                  onPress={() => toggleModal(false)}
                  style={styles.txtModal}>
                  {' '}
                  {`Nhắn tin cho  ${name}`}{' '}
                </Text>
              </View>

              <View style={{flexDirection: 'row'}}>
                <Image
                  style={{
                    position: 'absolute',
                    width: 48,
                    height: 50,
                    marginLeft:12,
                    marginTop: 28,
                  }}
                  source={iconWrong2}
                />
                <Text
                  onPress={() => toggleModal(false)}
                  style={styles.txtModal}>
                  {' '}
                  {`Bỏ theo dõi  ${name}`}
                </Text>
              </View>
              <Text style={{color: '#ff1493', paddingLeft: 80, fontSize: 16}}>
                {' '}
                Không nhìn thấy bài viết của nhau 
              </Text>
              <View style={{flexDirection: 'row'}}>
                <Image
                  style={{
                    position: 'absolute',
                    width: 48,
                    height: 50,
                    marginLeft:12,
                    marginTop: 24,
                  }}
                  source={iconCloes}
                />
                <Text
                  onPress={() => toggleModal(false)}
                  style={styles.txtModal}>
                  {' '}
                  {`Chặn  ${name}`}
                </Text>
              </View>
              <Text style={{color: '#ff1493', paddingLeft: 80, fontSize: 16}}>
                {' '}
                Sẽ không nhìn thấy bạn trên facebook
              </Text>
              <View style={{flexDirection: 'row'}}>
                <Image
                  style={{
                    position: 'absolute',
                    width: 48,
                    height: 50,
                    marginLeft:12,
                    marginTop: 24,
                  }}
                  source={iconWrong1}
                />
                <Text
                  onPress={() => toggleModal(false)}
                  style={styles.txtModal}>
                  {' '}
                  {`Hủy kết bạn với  ${name}`}{' '}
                </Text>
              </View>

              <Text style={{color: '#ff1493', paddingLeft: 80, fontSize: 16}}>
                {'  '}
                {`Hủy kết bạn với ${name}`}
              </Text>
            </View>
          </Modal>
          <TouchableOpacity onPress={() => toggleModal(true)}>
            <Image style={styles.imagesFunction} source={iconFriend} />
          </TouchableOpacity>
        </View>

        <View style={styles.body}>
          <Image style={styles.avatar} source={VinhNguyen} />

          <TouchableOpacity onPress={() => toggleModal(true)}>
            <Image style={styles.imagesFunction} source={iconFriend} />
          </TouchableOpacity>
        </View>

        <View style={styles.body}>
          <Image style={styles.avatar} source={VinhNguyen} />
          <TouchableOpacity onPress={toggleModal}>
            <Image style={styles.imagesFunction} source={iconFriend} />
          </TouchableOpacity>
        </View>

        <View style={styles.body}>
          <Image style={styles.avatar} source={VinhNguyen} />
          <TouchableOpacity onPress={toggleModal}>
            <Image style={styles.imagesFunction} source={iconFriend} />
          </TouchableOpacity>
        </View>

        <View style={styles.body}>
          <Image onpress ={{uri : image}}style={styles.avatar} source={VinhNguyen} />
          <TouchableOpacity onPress={toggleModal}>
            <Image style={styles.imagesFunction} source={iconFriend} />
          </TouchableOpacity>
        </View>
      </View>
      </ImageBackground>
    </View>      
  );
};

export default Detail;
const TEXT = {
  color: '#000',
  textAlign: 'center',
};

const styles = StyleSheet.create({
  container: {
    height: '100%',
  },
  image: {
    height: height,
    width: '100%',
  },
  content: {
    color:'#fff',
    fontStyle: 'italic', 
    fontWeight: '400',
    fontSize: 24,
    justifyContent:'center',
    marginLeft: '5%'
  },
  icon: {
    width: 24,
    height: 24,
    marginTop: 4,
    marginLeft: 8,
  },
  iconAdd1: {
    width: 32,
    height: 32,
    marginLeft: '20%',
    marginTop: 4 / 2,
  },
  header: {
    flexDirection: 'row',
    marginTop: 8,
  },
  btnContent: {
    flexDirection: 'row',
  },
  btn: {
    width: 72,
    height: 28,
    backgroundColor: '#ffb6c1',
    marginLeft: 16,
    marginTop: 12,
    borderRadius: 16,
    justifyContent: 'center',
  },
  Search: {
    flexDirection: 'row',
  },
  input: {
    width: '92%',
    backgroundColor: '#ffb6c1',
    shadowColor: '#7fff00',
    justifyContent: 'center',
    borderRadius: 24,
    marginLeft: '4%',
    marginRight: '4%',
    marginTop: '4%',
    fontSize: 38 / 2,
    paddingLeft: 60,
    color: 'white',
    fontStyle: 'italic',
  },
  iconSearch: {
    width: 40,
    height: 40,
    position: 'absolute',
    marginLeft: 28,
    marginTop: 20,
  },
  body: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  avatar: {
    width: 72,
    height: 72,
    borderRadius: 72 / 2,
    marginTop: '5%',
    marginLeft:8
  },
  imagesFunction: {
    width: 36,
    height: 36,
    marginRight: 24,
    marginTop: '48%',
  },
  item: {
    marginTop: '12%',
    marginBottom: '10%',
  },
  txtModal: {
    color: '#fff',
    paddingLeft: 80,
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: '2%',
  },
  shadow: {
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
  },
});
