// App.js
// React Native (Expo) + Supabase simple implementation

import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet, SafeAreaView } from 'react-native';
import { createClient } from '@supabase/supabase-js';


const SUPABASE_URL = 'https://YOUR_PROJECT.supabase.co';
const SUPABASE_ANON_KEY = 'YOUR_ANON_KEY';

const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

export default function App() {
  const [screen, setScreen] = useState('welcome');

  return (
    <SafeAreaView style={{ flex: 1 }}>
      {screen === 'welcome' && <WelcomeScreen navigate={setScreen} />}
      {screen === 'signup' && <SignupScreen navigate={setScreen} />}
      {screen === 'login' && <LoginScreen navigate={setScreen} />}
    </SafeAreaView>
  );
}

// 1. Welcome Screen
function WelcomeScreen({ navigate }) {
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: 'https://images.unsplash.com/photo-1520975916090-3105956dac38' }}
        style={styles.hero}
      />

      <View style={styles.overlay}>
        <Text style={styles.logo}>VolunteerBridge</Text>
        <Text style={styles.subtitle}>
          Empowering Communities through better Organisation
        </Text>

        <TouchableOpacity style={styles.primaryBtn} onPress={() => navigate('signup')}>
          <Text style={styles.btnText}>Get Started (Volunteer)</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.secondaryBtn}>
          <Text style={styles.secondaryText}>Get Started (Organisation / NGO)</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

// 2. Signup Screen
function SignupScreen({ navigate }) {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    password: '',
    skills: ''
  });

  const handleSignup = async () => {
    const { error } = await supabase.auth.signUp({
      email: form.email,
      password: form.password
    });

    if (error) alert(error.message);
    else alert('Signup successful!');
  };

  return (
    <View style={styles.formContainer}>
      <Text style={styles.title}>Signup</Text>

      {['name', 'email', 'phone', 'password', 'skills'].map((field) => (
        <TextInput
          key={field}
          placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
          style={styles.input}
          secureTextEntry={field === 'password'}
          onChangeText={(text) => setForm({ ...form, [field]: text })}
        />
      ))}

      <TouchableOpacity style={styles.primaryBtn} onPress={handleSignup}>
        <Text style={styles.btnText}>Signup</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.googleBtn}>
        <Text>Signup with Google</Text>
      </TouchableOpacity>

      <Text style={styles.switchText}>
        Have an account?{' '}
        <Text style={styles.link} onPress={() => navigate('login')}>
          Login
        </Text>
      </Text>
    </View>
  );
}

// 3. Login Screen
function LoginScreen({ navigate }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password
    });

    if (error) alert(error.message);
    else alert('Login successful!');
  };

  return (
    <View style={styles.formContainer}>
      <Text style={styles.title}>Login</Text>

      <TextInput
        placeholder="Email"
        style={styles.input}
        onChangeText={setEmail}
      />

      <TextInput
        placeholder="Password"
        secureTextEntry
        style={styles.input}
        onChangeText={setPassword}
      />

      <TouchableOpacity style={styles.primaryBtn} onPress={handleLogin}>
        <Text style={styles.btnText}>Login</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.googleBtn}>
        <Text>Login with Google</Text>
      </TouchableOpacity>

      <Text style={styles.switchText}>
        Don't have an account?{' '}
        <Text style={styles.link} onPress={() => navigate('signup')}>
          Signup
        </Text>
      </Text>
    </View>
  );
}

// Styles
const styles = StyleSheet.create({
  container: { flex: 1 },
  hero: { width: '100%', height: '100%', position: 'absolute' },
  overlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.3)',
    padding: 20
  },
  logo: { color: '#fff', fontSize: 28, fontWeight: 'bold', marginBottom: 10 },
  subtitle: { color: '#ddd', textAlign: 'center', marginBottom: 30 },
  primaryBtn: {
    backgroundColor: '#2c7a7b',
    padding: 15,
    borderRadius: 8,
    width: '100%',
    marginTop: 10
  },
  btnText: { color: '#fff', textAlign: 'center' },
  secondaryBtn: {
    borderWidth: 1,
    borderColor: '#2c7a7b',
    padding: 15,
    borderRadius: 8,
    width: '100%',
    marginTop: 10
  },
  secondaryText: { textAlign: 'center', color: '#2c7a7b' },

  formContainer: {
    flex: 1,
    padding: 20,
    justifyContent: 'center'
  },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20, textAlign: 'center' },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 12,
    borderRadius: 6,
    marginBottom: 10
  },
  googleBtn: {
    borderWidth: 1,
    padding: 15,
    borderRadius: 8,
    marginTop: 10,
    alignItems: 'center'
  },
  switchText: { marginTop: 15, textAlign: 'center' },
  link: { color: '#2c7a7b', fontWeight: 'bold' }
});


import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet, SafeAreaView } from 'react-native';
import { createClient } from '@supabase/supabase-js';


const SUPABASE_URL = 'https://YOUR_PROJECT.supabase.co';
const SUPABASE_ANON_KEY = 'YOUR_ANON_KEY';

const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

export default function App() {
  const [screen, setScreen] = useState('welcome');

  return (
    <SafeAreaView style={{ flex: 1 }}>
      {screen === 'welcome' && <WelcomeScreen navigate={setScreen} />}
      {screen === 'signup' && <SignupScreen navigate={setScreen} />}
      {screen === 'login' && <LoginScreen navigate={setScreen} />}
    </SafeAreaView>
  );
}

// 1. Welcome Screen
function WelcomeScreen({ navigate }) {
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: 'https://images.unsplash.com/photo-1520975916090-3105956dac38' }}
        style={styles.hero}
      />

      <View style={styles.overlay}>
        <Text style={styles.logo}>VolunteerBridge</Text>
        <Text style={styles.subtitle}>
          Empowering Communities through better Organisation
        </Text>

        <TouchableOpacity style={styles.primaryBtn} onPress={() => navigate('signup')}>
          <Text style={styles.btnText}>Get Started (Volunteer)</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.secondaryBtn}>
          <Text style={styles.secondaryText}>Get Started (Organisation / NGO)</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

// 2. Signup Screen
function SignupScreen({ navigate }) {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    password: '',
    skills: ''
  });

  const handleSignup = async () => {
    const { error } = await supabase.auth.signUp({
      email: form.email,
      password: form.password
    });

    if (error) alert(error.message);
    else alert('Signup successful!');
  };

  return (
    <View style={styles.formContainer}>
      <Text style={styles.title}>Signup</Text>

      {['name', 'email', 'phone', 'password', 'skills'].map((field) => (
        <TextInput
          key={field}
          placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
          style={styles.input}
          secureTextEntry={field === 'password'}
          onChangeText={(text) => setForm({ ...form, [field]: text })}
        />
      ))}

      <TouchableOpacity style={styles.primaryBtn} onPress={handleSignup}>
        <Text style={styles.btnText}>Signup</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.googleBtn}>
        <Text>Signup with Google</Text>
      </TouchableOpacity>

      <Text style={styles.switchText}>
        Have an account?{' '}
        <Text style={styles.link} onPress={() => navigate('login')}>
          Login
        </Text>
      </Text>
    </View>
  );
}

// 3. Login Screen
function LoginScreen({ navigate }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password
    });

    if (error) alert(error.message);
    else navigate('dashboard');
  };

  return (
    <View style={styles.formContainer}>
      <Text style={styles.title}>Login</Text>

      <TextInput
        placeholder="Email"
        style={styles.input}
        onChangeText={setEmail}
      />

      <TextInput
        placeholder="Password"
        secureTextEntry
        style={styles.input}
        onChangeText={setPassword}
      />

      <TouchableOpacity style={styles.primaryBtn} onPress={handleLogin}>
        <Text style={styles.btnText}>Login</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.googleBtn}>

// src/screens/ProjectDetailsScreen.js
import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Alert,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useVolunteer } from '../context/VolunteerContext';
import { useAuth } from '../context/AuthContext';

export default function ProjectDetailsScreen({ route, navigation }) {
  const { project } = route.params;
  const { user } = useAuth();
  const { updateTaskStatus, fetchUserTasks } = useVolunteer();
  const [tasks, setTasks] = useState([
    { id: '1', name: 'Design ten fliers for Community', status: 'Pending', project: 'Community outreach' },
    { id: '2', name: 'Arrange chairs for Event organisation', status: 'Pending', project: 'Event organization' },
    { id: '3', name: 'Create Cartoon for Awareness', status: 'Pending', project: 'Awareness campaigns' },
    { id: '4', name: 'Design Slides for Field outreach', status: 'Pending', project: 'Field outreach' },
  ]);

  const taskHistory = [
    { id: '5', name: 'Facilitate Workshops', status: 'Done', project: 'Workshops' },
    { id: '6', name: 'Send emails for Advocacy', status: 'Done', project: 'Advocacy' },
  ];

  const handleTaskToggle = async (task) => {
    Alert.alert(
      'Update Task',
      `Mark "${task.name}" as completed?`,
      [
        { text: 'Cancel', style: 'cancel' },
        {
          text: 'Complete',
          onPress: async () => {
            const newStatus = task.status === 'Done' ? 'Pending' : 'Done';
            const result = await updateTaskStatus(task.id, newStatus);
            if (result.success) {
              setTasks(prevTasks =>
                prevTasks.map(t =>
                  t.id === task.id ? { ...t, status: newStatus } : t
                )
              );
              Alert.alert('Success', 'Task status updated!');
            } else {
              Alert.alert('Error', 'Failed to update task');
            }
          },
        },
      ]
    );
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.projectHeader}>
        <Text style={styles.projectName}>{project.name}</Text>
        <View style={[styles.statusBadge, 
          { backgroundColor: project.status === 'Pending' ? '#ff9800' : '#4CAF50' }]}>
          <Text style={styles.statusText}>{project.status}</Text>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Description</Text>
        <Text style={styles.description}>{project.description}</Text>
      </View>

      <View style={styles.infoCard}>
        <View style={styles.infoRow}>
          <Ionicons name="calendar-outline" size={20} color="#4CAF50" />
          <Text style={styles.infoLabel}>Due Date:</Text>
          <Text style={styles.infoValue}>{project.dueDate}</Text>
        </View>
        <View style={styles.infoRow}>
          <Ionicons name="time-outline" size={20} color="#4CAF50" />
          <Text style={styles.infoLabel}>Estimated Hours:</Text>
          <Text style={styles.infoValue}>{project.estimatedHours} hours</Text>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Your Assigned Tasks</Text>
        {tasks.map(task => (
          <TouchableOpacity
            key={task.id}
            style={styles.taskItem}
            onPress={() => handleTaskToggle(task)}
          >
            <View style={styles.taskContent}>
              <Ionicons
                name={task.status === 'Done' ? 'checkbox-outline' : 'square-outline'}
                size={24}
                color={task.status === 'Done' ? '#4CAF50' : '#999'}
              />
              <Text style={[styles.taskName, task.status === 'Done' && styles.taskCompleted]}>
                {task.name}
              </Text>
            </View>
            <Text style={styles.taskStatus}>{task.status}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Task History</Text>
        {taskHistory.map(task => (
          <View key={task.id} style={styles.historyItem}>
            <Text style={styles.historyName}>{task.name}</Text>
            <View style={styles.historyBadge}>
              <Text style={styles.historyStatus}>{task.status}</Text>
            </View>
          </View>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  projectHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 20,
    marginBottom: 10,
  },
  projectName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    flex: 1,
  },
  statusBadge: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 15,
  },
  statusText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: 'bold',
  },
  section: {
    backgroundColor: '#fff',
    padding: 20,
    marginTop: 10,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 15,
  },
  description: {
    fontSize: 14,
    color: '#666',
    lineHeight: 22,
  },
  infoCard: {
    backgroundColor: '#fff',
    padding: 20,
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  infoRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  infoLabel: {
    fontSize: 14,
    color: '#666',
    marginLeft: 8,
    marginRight: 5,
  },
  infoValue: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#333',
  },
  taskItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  taskContent: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  taskName: {
    fontSize: 14,
    color: '#333',
    marginLeft: 12,
    flex: 1,
  },
  taskCompleted: {
    textDecorationLine: 'line-through',
    color: '#999',
  },
  taskStatus: {
    fontSize: 12,
    color: '#ff9800',
  },
  historyItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  historyName: {
    fontSize: 14,
    color: '#999',
  },
  historyBadge: {
    backgroundColor: '#4CAF50',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 12,
  },
  historyStatus: {
    color: '#fff',
    fontSize: 12,
    fontWeight: 'bold',
  },
});