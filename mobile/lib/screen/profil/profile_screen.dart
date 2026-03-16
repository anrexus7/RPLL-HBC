import 'package:flutter/material.dart';

class ProfileScreen extends StatelessWidget {
  const ProfileScreen({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text("Profile", style: TextStyle(color: Colors.white)),
        backgroundColor: Colors.pink,
      ),
      body: Padding(
        padding: const EdgeInsets.all(16),
        child: Column(
          children: [

            // FOTO PROFIL
            const CircleAvatar(
              radius: 50,
              backgroundImage: AssetImage("assets"),
            ),

            const SizedBox(height: 16),

            // NAMA
            const Text(
              "Calvin Estanto",
              style: TextStyle(
                fontSize: 20,
                fontWeight: FontWeight.bold,
              ),
            ),

            const SizedBox(height: 4),

            const Text(
              "Software Developer",
              style: TextStyle(color: Colors.grey),
            ),

            const SizedBox(height: 20),

            // CARD INFORMASI
            Card(
              child: Column(
                children: const [
                  ListTile(
                    leading: Icon(Icons.email),
                    title: Text("Email"),
                    subtitle: Text("calvin@email.com"),
                  ),
                  Divider(),
                  ListTile(
                    leading: Icon(Icons.badge),
                    title: Text("Employee ID"),
                    subtitle: Text("EMP001"),
                  ),
                  Divider(),
                  ListTile(
                    leading: Icon(Icons.business),
                    title: Text("Department"),
                    subtitle: Text("IT Department"),
                  ),
                ],
              ),
            ),

            const SizedBox(height: 20),

            // BUTTON LOGOUT
            SizedBox(
              width: double.infinity,
              child: ElevatedButton(
                style: ElevatedButton.styleFrom(
                  backgroundColor: Colors.pink,
                ),
                onPressed: () {
                  // logic logout
                },
                child: const Text("Logout", style: TextStyle(color: Colors.white),),
              ),
            ),
          ],
        ),
      ),
    );
  }
}