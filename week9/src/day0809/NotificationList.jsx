import React from "react";
import Notification from "./Notification";

const reservedNotifications = [
    {id: 1, message: "안녕하세요"},
    {id: 2, message: "반갑습니다"},
    {id: 3, message: "안녕하세요요요요요"},
];

let timer; // setInterval 제어

class NotificationList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            notifications: []
        };
    }

    // 렌더링 후 호출
    componentDidMount() {
        const {notifications} = this.state;

        // 1초마다 알림 꺼내서 추가
        timer = setInterval(() => {
            if (notifications.length < reservedNotifications.length) {
                const index = notifications.length;
                notifications.push(reservedNotifications[index]);
                this.setState({notifications: notifications}); // setState() -> 재렌더링
            } else {
                this.setState({notifications: []});
                clearInterval(timer);
            }
        }, 1000);

        // notifications.push(...reservedNotifications);
        // this.setState({notifications: notifications}); // setState() -> 재렌더링
    }

    // 언마운트 전 호출
    componentWillUnmount() {
        clearInterval(timer)
    }

    render() {
        return (
            <div>
                {this.state.notifications.map((notification) => {
                    return (
                        <Notification key={notification.id} id={notification.id} message={notification.message} />
                    )
                })}
            </div>
        );
    }
}

export default NotificationList;