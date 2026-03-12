import 'package:flutter/material.dart';
import 'package:mobile/screen/home/home_screen.dart';

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
      );
  } 
}
