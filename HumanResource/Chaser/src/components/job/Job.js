import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Picker, TextInput, FlatList, Image, ScrollView } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { connect } from 'react-redux';
import { Languages, setLanguage } from '../../content/languages/Languages';
import Color from '../../content/color/Color';
import { width, height, fontScale, verticalScale, horizontalScale } from '../../utillities/Scale';
import HouseWork from '../../content/images/HouseWork.png';
import Panel from '../../components/panel/Panel';
import CommonStyle from '../../content/styles/CommonStyle';

const { white, gray2, black, gray4, blue5, whiteBlue, brownLightGray } = Color;
const { titleBoldText, baseText, smallText } = CommonStyle;

class Job extends Component {
    constructor(props) {
        super(props);
        this.state = ({

        });
    }

    render() {
        const { navigate } = this.props.navigation;
        // const { } = this.props;
        return (
            <ScrollView
                style={styles.scrollView}
                keyboardShouldPersistTaps='never'
            >
                <View style={styles.container}>
                    <View style={styles.topSection} >
                        <View style={styles.totalViewContainer}>
                            <MaterialIcons
                                size={fontScale(14)}
                                name={'visibility'}
                            />
                            <Text style={smallText}> 1000</Text>
                        </View>
                        <View style={styles.brandContainer} >
                            <View style={styles.brandImageContainer}>
                                <Image
                                    source={HouseWork}
                                    style={styles.brandImage}
                                />
                            </View>
                            <View style={styles.brandContentContainer}>
                                <Text style={titleBoldText}>Nhân viên dọn nhà</Text>
                                <Text style={baseText}>Công ty XANH SẠCH ĐẸP</Text>
                            </View>
                        </View>
                        <View style={styles.totalViewContainer}>
                            <TouchableOpacity style={styles.btnComment} onPress={() => navigate('CommentRouter')}>
                                <MaterialIcons
                                    size={fontScale(14)}
                                    name={'forum'}
                                    style={{ color: white }}
                                />
                                <Text style={[smallText, { color: white, fontWeight: 'bold' }]}> Bình luận</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={[styles.btnJoin]}>
                                <MaterialIcons
                                    size={fontScale(14)}
                                    name={'exit-to-app'}
                                    style={{ color: white }}
                                />
                                <Text style={[smallText, { color: white, fontWeight: 'bold' }]}> Tham gia</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.divisionLine} />
                        <View style={styles.baseInfoContainer}>
                            <View style={styles.baseInfoSectionContainer}>
                                <MaterialIcons
                                    size={fontScale(14)}
                                    name={'event'}
                                />
                                <Text style={smallText}> Hạn đăng ký: 20/10/2017</Text>
                            </View>
                            <View style={styles.baseInfoSectionContainer}>
                                <MaterialIcons
                                    size={fontScale(14)}
                                    name={'playlist-add-check'}
                                />
                                <Text style={smallText}> Đã đăng ký: 50/100</Text>
                            </View>
                        </View>
                        <View style={styles.baseInfoContainer}>
                            <View style={styles.baseInfoSectionContainer}>
                                <MaterialIcons
                                    size={fontScale(14)}
                                    name={'attach-money'}
                                />
                                <Text style={smallText}> Mức lương: 7-10 triệ</Text>
                            </View>
                            <View style={styles.baseInfoSectionContainer}>
                                <MaterialIcons
                                    size={fontScale(14)}
                                    name={'location-on'}
                                />
                                <Text style={smallText}> Địa điểm: TP. Hồ Chí Minh</Text>
                            </View>
                        </View>
                        <View style={styles.baseInfoContainer}>
                            <View style={styles.baseInfoSectionContainer}>
                                <MaterialIcons
                                    size={fontScale(14)}
                                    name={'equalizer'}
                                />
                                <Text style={smallText}> Kinh nghiệm: Dưới 1 năm</Text>
                            </View>
                            <View style={styles.baseInfoSectionContainer}>
                                <MaterialIcons
                                    size={fontScale(14)}
                                    name={'business-center'}
                                />
                                <Text style={smallText}> Chức vụ: Nhân viên</Text>
                            </View>
                        </View>
                        <View style={[styles.baseInfoContainer, { flex: 1 }]}>
                            <View style={styles.baseInfoSectionContainer}>
                                <MaterialIcons
                                    size={fontScale(14)}
                                    name={'school'}
                                />
                                <Text style={smallText}> Yêu cầu bằng cấp: Đại học</Text>
                            </View>
                            <View style={styles.baseInfoSectionContainer}>
                                <MaterialIcons
                                    size={fontScale(14)}
                                    name={'laptop-mac'}
                                />
                                <Text style={smallText}> Hình thức làm việc: Chính thức</Text>
                            </View>
                        </View>
                        <View style={styles.baseInfoContainer}>
                            <View style={styles.baseInfoSectionContainer}>
                                <MaterialIcons
                                    size={fontScale(14)}
                                    name={'account-circle'}
                                />
                                <Text style={smallText}> Số lượng: 100</Text>
                            </View>
                            <View style={styles.baseInfoSectionContainer}>
                                <MaterialIcons
                                    size={fontScale(14)}
                                    name={'wc'}
                                />
                                <Text style={smallText}> Yêu cầu giới tính: Không</Text>
                            </View>
                        </View>
                    </View>
                    <Panel title="Mô tả">
                        <Text style={baseText}>
                            - Tư vấn khách hàng về các sản phẩm dự án của công ty.
                            - Hướng dẫn khách hàng tham quan các dự án (Công ty có xe ôtô đưa đón)
                            - Tìm kiếm khai thác và chăm sóc khách hàng tiềm năng.
                            - Công việc cụ thể sẽ được hướng dẫn chi tiết khi vào làm việc.
                        </Text>
                    </Panel>

                    <Panel title="Yêu cầu công việc">
                        <Text style={baseText}>
                            - Chăm chỉ, nhiệt tình, ham học hỏi, có tinh thần cầu tiến.
                        - Có laptop.
                        - Kỹ năng đàm phán giao tiếp tốt
                        - Có kỹ năng làm việc theo nhóm và độc lập
                        - Ưu tiên những ứng viên có kinh nghiệm trong lĩnh vực bất động sản, Kinh doanh, CSKH,Telesale, Chuyên viên tư vấn.
                        </Text>
                    </Panel>

                    <Panel title="Quyền lợi">
                        <Text style={baseText}>
                            - Lương căn bản: 6.500.000đ triệu + Hoa Hồng từ 15tr đến 30tr/ sản phẩm + Thưởng nóng => Thu nhập hơn 30 triệu / tháng
                        - Chế độ thưởng rất hấp dẫn theo Super sale, đặt cọc nhanh nhất, kí hợp đồng nhanh nhất .
                        - Hưởng đầy đủ quyền lợi BHXH, BHYT, BHTN theo quy định.
                        - Các chương trình du lịch nghỉ dưỡng, Team building thú vị hấp dẫn.
                        - Tham gia các khóa huấn luyện đào tạo kỹ năng giao tiếp.
                        - Môi trường làm việc năng động, chuyên nghiệp và nhiều cơ hội thăng tiến.
                        - Sản Phẩm cực kì hot nhất thị trường, dễ bán.
                        </Text>
                    </Panel>

                    <Panel title="Thông tin liên hệ">
                        <Text style={baseText}>
                            - Người liên hệ: a Dũng
                        - Địa chỉ liên hệ: Lê Văn Việt, Quận 9, TP. Hồ chí Minh
                        </Text>
                    </Panel>
                </View>
            </ScrollView >
        );
    }
}

const styles = StyleSheet.create({
    scrollView: {
        flex: 1,
        backgroundColor: whiteBlue,
    },
    container: {
        flex: 1,
        marginHorizontal: fontScale(10),
        marginBottom: fontScale(5),
        marginTop: fontScale(10),
    },
    topSection: {
        backgroundColor: white,
        width: width - fontScale(20),
        borderRadius: fontScale(5),
        flex: 1,
        marginBottom: fontScale(5),
        shadowColor: gray4,
        shadowOpacity: 1,
        shadowRadius: 2,
        shadowOffset:
            { width: 1, height: 1 },
        paddingBottom: fontScale(15)
    },
    brandContainer: {
        minHeight: verticalScale(80),
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row'
    },
    totalViewContainer: {
        justifyContent: 'flex-end',
        alignItems: 'center',
        flexDirection: 'row',
        paddingHorizontal: fontScale(10),
        paddingTop: fontScale(5),
        flex: 1
    },
    brandImageContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    brandImage: {
        width: fontScale(56),
        height: fontScale(56),
        borderRadius: fontScale(28),
        borderColor: gray2,
        borderWidth: 3
    },
    brandContentContainer: {
        flex: 3,
        paddingRight: horizontalScale(10)
    },
    divisionLine: {
        height: 0.5,
        width: (width * 9) / 10,
        backgroundColor: gray2,
        alignSelf: 'center',
        marginTop: fontScale(10)
    },
    baseInfoContainer: {
        flexDirection: 'row',
        flex: 1,
        // alignItems: 'center',
        paddingTop: fontScale(10),
    },
    baseInfoSectionContainer: {
        flexDirection: 'row',
        flex: 1,
        paddingHorizontal: fontScale(10)
    },
    btnJoin: {
        flexDirection: 'row',
        padding: fontScale(5),
        borderRadius: fontScale(4),
        backgroundColor: blue5,
        marginLeft: fontScale(5)
    },
    btnComment: {
        flexDirection: 'row',
        padding: fontScale(5),
        borderRadius: fontScale(4),
        backgroundColor: brownLightGray,
    }
});

function mapStateToProps(state) {
    return { lang: state.lang };
}

export default connect(mapStateToProps)(Job);

