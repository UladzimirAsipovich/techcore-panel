import React from 'react';
import { ReactComponent as InfoIcon } from './icons/info.svg';
import { ReactComponent as WarningIcon } from './icons/warning.svg';
import './CreateLocation.scss';

import { Checkbox, Form, Input, Modal, Select, Space, Tooltip, Typography } from 'antd';
const { Option } = Select;

interface Values {
  title: string;
  description: string;
  modifier: string;
}

interface CollectionCreateFormProps {
  visible: boolean;
  onCreate: (values: Values) => void;
  onCancel: () => void;
}

const Days: string[] = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const Months: string[] = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
const Numbers_days: number[] = Array(31).fill(1);
const TimeZones: string[] = ['(GMT+03:00) Moscow+00 - Moscow', '(GMT+04:00) Italy+01 - Rome'];
const Users: string[] = ['Julia Senko', 'Aleksandr', 'Jessica Monro'];

const CreateLocation: React.FC<CollectionCreateFormProps> = ({
  visible,
  onCreate,
  onCancel,
}) => {

  const [form] = Form.useForm();

  return (
    <Modal
      visible={visible}
      title="Create a new collection"
      okText="Create"
      cancelText="Cancel"
      onCancel={onCancel}
      className='CreateLocation'
      onOk={() => {
        form
          .validateFields()
          .then(values => {
            form.resetFields();
            onCreate(values);
          })
          .catch(info => {
            console.log('Validate Failed:', info);
          });
      }}
      style={{ borderRadius: '12px', overflow: 'hidden', paddingBottom: 0, 'minWidth': '550px' }}

    >
      <Form
        form={form}
        layout="vertical"
        name="form_in_modal"
        initialValues={{ modifier: 'public' }}

      >

        <Form.Item name="id" initialValue={new Date().getTime()} className="hidden-form-item">
          <Input type='hidden' />
        </Form.Item>

        <Form.Item
          name="location"
          rules={[{ required: true, message: 'Please input the Location Name!' }]}
        >
          <Input placeholder="Location Name" />
        </Form.Item>

        <Form.Item
          name="workdays"
          className='Workweek_item'
          label={<span>Workweek<span className='colorRed'>*</span></span>}
          initialValue={['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday']}
        >
          <Checkbox.Group options={Days} />
        </Form.Item>

        <Space className='Leave_Quota'>
          <Form.Item
            name='Leave_Quota'
            label='Leave Quota Reset Based On' initialValue={"Accounting year"}>
            <Select>
              <Option value="Accounting year">Accounting year</Option>
              <Option value="lucy">Lucy</Option>
              <Option value="Yiminghe">yiminghe</Option>
            </Select>
          </Form.Item>
          <Tooltip title="This setting will determine if your leave balance will be reset based on the accounting year (company's fiscal year) or based on the employee's start date. Besides quotas, your roll-over policy will also be affected according to this setting.">
            <Typography.Link href="#API"><InfoIcon /></Typography.Link>
          </Tooltip>
        </Space>

        <Space className='Year_Start'>
          <Form.Item
            name='Year_Start'
            label='Fiscal Year Start' initialValue={Months[0]}>
            <Select options={Months.map(el => ({ label: el, value: el }))} />
          </Form.Item>

          <Form.Item name='Day_Start' initialValue={1}>
            <Select options={Numbers_days.map((el, ind) => ({ label: ind + 1, value: ind + 1 }))} />
          </Form.Item>
        </Space>


        <Space className='Expiry_Date'>
          <Form.Item
            name="Expiry_Date"
            valuePropName="checked"
            initialValue={true}
          >
            <Checkbox>No Brought Forward Expiry Date</Checkbox>
          </Form.Item>
          <Tooltip title="Each year, the user's rolled over leaves will expire on the date you set. The quotas for each leave type are configured through the Leave Types section for this location and each can be set individually to allow or not allow roll overs.">
            <Typography.Link href="#API"><InfoIcon /></Typography.Link>
          </Tooltip>
        </Space>

        <Space className='Week_Starts_On'>
          <Form.Item
            name="Week_Starts_On"
            className='Week_Starts_On'
            label='Week Starts On'
            initialValue={Days[1]}
          >
            <Select options={Days.map(el => ({ label: el, value: el }))} />
          </Form.Item>
        </Space>

        <Space className='Time_Zone'>
          <Form.Item
            name="Time_Zone"
            label={<span>Time Zone<span className='colorRed'>*</span></span>}
            initialValue={[TimeZones[0]]}
          >
            <Select options={TimeZones.map(el => ({ label: el, value: el }))} />
          </Form.Item>
          <Tooltip title="This default time zone is used throughout the system. For example for accurately displaying leave information in the calendar and for the system events listed in the Logs.">
            <Typography.Link href="#API"><InfoIcon /></Typography.Link>
          </Tooltip>
        </Space>

        <div className='Add_User'>
          <Form.Item name="Add_User" rules={[{ required: true, message: 'Please input the Users!' }]}>
            <Select placeholder='Add Users' mode="multiple" options={Users.map(el => ({ label: el, value: el }))} />
          </Form.Item>
          <div className='Add_User_warning'>
            <WarningIcon />
            <p>
              Adding or removing a user might impact the user's configuration and leave information (e.g. the initial brought forward days).
            </p>
          </div>
        </div>


        <Space className='Location_Default'>
          <Form.Item
            name="Location_Default"
            valuePropName="checked"
            initialValue={true}
          >
            <Checkbox>Make This Location Default</Checkbox>
          </Form.Item>
          <Tooltip title="By making this Location the default one, all new team members will be automatically added to this Location.">
            <Typography.Link href="#API"><InfoIcon /></Typography.Link>
          </Tooltip>
        </Space>
        <p className='info'>
          Once you've created a Location, assign a Leave Policy to the Location, in order to enable Users to request Leave.  To assign a <Typography.Link href="#API" underline>Leave Policy</Typography.Link>, go to Location Leave Policies Assign Leave Policy.
        </p>
      </Form>
    </Modal>
  )
}

export default CreateLocation;