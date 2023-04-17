import React, { useState } from 'react';
import { View, Text, TextInput, Button, Modal } from 'react-native';

const Form = ({ isVisible, onClose }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [jobTitle, setJobTitle] = useState('');
  const [JobDescription, setJobDescription] = useState('');
  const [pay, setPay] = useState('');
  const [hourly, setHourly] = useState('');
  const [completionTime, setCompletionTime] = useState('');
  const [workers, setWorkers] = useState('');
  const [location, setLocation] = useState('');
  const [startTime, setStartTime] = useState('');
  const [extraInfo, setExtraInfo] = useState('');
  
  const handleSubmit = () => {
    // Do something with the form data here
    console.log('Form submitted!');
    let job = {
        FirstName:firstName,
        LastName:lastName,
        JobTitle:jobTitle,
        JobDescription:JobDescription,
        Images:[],
        Pay:pay,
        Hourly:hourly,
        CompletionTime:completionTime,
        NumberOfWorkers:workers,
        Geolocation:location,
        StartTime:startTime,
        ExtraInfo:extraInfo
    }
    console.log(job)
    onClose(); // Close the form
  }
  
  return (
    <Modal visible={isVisible}>
      <View style={{ padding: 20 }}>
        <Text style={{ fontSize: 20 }}>Fill out the form:</Text>
        <TextInput placeholder="First Name" value={firstName} onChangeText={text => setFirstName(text)} />
        <TextInput placeholder="Last Name" value={lastName} onChangeText={text => setLastName(text)} />
        <TextInput placeholder="Job Title" value={jobTitle} onChangeText={text => setJobTitle(text)} />
        <TextInput placeholder="Job Description" value={JobDescription} onChangeText={text => setJobDescription(text)} />
        <TextInput placeholder="Pay" value={pay} onChangeText={text => setPay(text)} />
        <TextInput placeholder="Hourly?" value={hourly} onChangeText={text => setHourly(text)} />
        <TextInput placeholder="How long will the job take?" value={completionTime} onChangeText={text => setCompletionTime(text)} />
        <TextInput placeholder="How many workers needed?" value={workers} onChangeText={text => setWorkers(text)} />
        <TextInput placeholder="Job Location" value={location} onChangeText={text => setLocation(text)} />
        <TextInput placeholder="Start Time" value={startTime} onChangeText={text => setStartTime(text)} />
        <TextInput placeholder="Extra Info" value={extraInfo} onChangeText={text => setExtraInfo(text)} />
        <Button title="Submit" onPress={handleSubmit} />
        <Button title="Close" onPress={onClose} />
      </View>
    </Modal>
  );
}

export default Form;