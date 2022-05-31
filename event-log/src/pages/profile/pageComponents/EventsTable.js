import React, { useEffect } from "react";
import "antd/dist/antd.css";
import { Table } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { useAuth } from "../../../utils/customHooks";
import { loadEvents } from "../../../redux/actions/eventActions";
import { loadHosts } from "../../../redux/actions/hostActions";
import { getData } from "../../../api/eventsApi";

const columns = [
  {
    title: "Title",
    dataIndex: "title",
    key: "title",
    render: (text) => <a>{text}</a>,
  },
  {
    title: "Category",
    dataIndex: "category",
    key: "category",
    render: (text) => <a>{text}</a>,
  },
  {
    title: "Date",
    dataIndex: "date",
    key: "date",
    render: (text) => <a>{text}</a>,
  },
];

function EventsTable() {
  const { currentUser } = useAuth();
  const dispatch = useDispatch();
  useEffect(() => {
    const loadData = async () => {
      const [events, hosts] = await getData();
      dispatch(loadEvents(events));
      dispatch(loadHosts(hosts));
    };
    loadData();
  }, []);
  const events = useSelector((state) => state.events);
  const participatedEvents = events.filter((event) =>
    event.attendees.map((a) => a.email).includes(currentUser.email)
  );
  const data = participatedEvents.map((e) => ({
    key: e.eventId,
    title: e.title,
    category: e.category,
    date: e.date,
  }));
  return <Table columns={columns} dataSource={data} pagination={false} />;
}

export default EventsTable;
