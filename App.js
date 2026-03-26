// App.js
// React Native (Expo) + Supabase simple implementation

import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet, SafeAreaView } from 'react-native';
import { createClient } from '@supabase/supabase-js';

// 🔑 Replace with your Supabase credentials
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

/*
SETUP INSTRUCTIONS:

1. Install Expo:
   npm install -g expo-cli

2. Create project:
   expo init VolunteerBridgeApp

3. Install dependencies:
   npm install @supabase/supabase-js

4. Replace App.js with this file

5. Add your Supabase project URL + anon key

6. Run:
   npm start

This works on both iOS & Android.
*/
// App.js
// React Native (Expo) + Supabase simple implementation

import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet, SafeAreaView } from 'react-native';
import { createClient } from '@supabase/supabase-js';

// 🔑 Replace with your Supabase credentials
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
