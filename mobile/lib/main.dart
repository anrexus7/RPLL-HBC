import 'package:flutter/material.dart';
import 'package:mobile/screen/home/home_screen.dart';
import 'package:mobile/screen/profil/profile_screen.dart';
import 'package:mobile/static/navigation_route.dart';

void main() {
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Mobile HBC',
      home: const HomeScreen(),
      debugShowCheckedModeBanner: false,
      routes:{
        NavigationRoute.homeRoute.name: (context) => const HomeScreen(),
        NavigationRoute.profile.name: (context) => const ProfileScreen(),
      }
      );
  } 
}
