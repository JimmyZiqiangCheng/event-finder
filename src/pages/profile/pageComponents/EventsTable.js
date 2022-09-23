import React, { useEffect } from "react";
import "antd/dist/antd.min.css";
import { Table } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { useAuth } from "../../../utils/customHooks";
import { loadEvents } from "../../../redux/actions/eventsActions";
import { loadHosts } from "../../../redux/actions/hostActions";
import { getData } from "../../../services/eventsApi";

const columns = [
  {
    title: "Title",
    dataIndex: "title",
    key: "title",
    sorter: (a, b) => a.title > b.title,
    render: (text) => <p>{text}</p>,
  },
  {
    title: "Category",
    dataIndex: "category",
    key: "category",
    sorter: (a, b) => a.category > b.category,
    render: (text) => <p>{text}</p>,
  },
  {
    title: "Date",
    dataIndex: "date",
    key: "date",
    sorter: (a, b) => a.date > b.date,
    render: (text) => <p>{text}</p>,
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
  }, [dispatch]);
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
