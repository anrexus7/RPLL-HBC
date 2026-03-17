import 'package:flutter/material.dart';
import 'package:mobile_scanner/mobile_scanner.dart';

class HomeScreen extends StatelessWidget {
  const HomeScreen({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text(
          "Harapan Bangsa Company",
          style: TextStyle(color: Colors.white),
        ),
        actions: [
          IconButton(
            onPressed: () {
              Navigator.pushNamed(context, "/profile");
            },
            icon: const Icon(Icons.person, color: Colors.white, size: 30),
          ),
          IconButton(
            onPressed: () {
              print("Notifikasi");
              // Navigator.pushNamed(context, "/profile");
            },
            icon: const Icon(Icons.mail, color: Colors.white, size: 30),
          ),
        ],
        backgroundColor: Colors.pink,
      ),
      body: _buildBody(context),
      floatingActionButton: FloatingActionButton(
        backgroundColor: Colors.white,
        child: const Icon(Icons.qr_code_scanner),
        onPressed: () {
          Navigator.push(
            context,
            MaterialPageRoute(builder: (_) => const ScanQRPage()),
          );
        },
      ),
    );
  }

  Widget _buildBody(BuildContext context) {
    final List<Map<String, String>> attendanceData = [
      {
        "date": "07 Wed",
        "checkin": "09:00 AM",
        "checkout": "05:00 PM",
        "total": "7h 50m",
      },
      {
        "date": "07 Fri",
        "checkin": "09:00 AM",
        "checkout": "05:00 PM",
        "total": "7h 50m",
      },
      {
        "date": "07 Sun",
        "checkin": "09:00 AM",
        "checkout": "05:00 PM",
        "total": "7h 50m",
      },
      {
        "date": "07 Sun",
        "checkin": "09:00 AM",
        "checkout": "05:00 PM",
        "total": "7h 50m",
      },
      {
        "date": "07 Sun",
        "checkin": "09:00 AM",
        "checkout": "05:00 PM",
        "total": "7h 50m",
      },
      {
        "date": "08 Sun",
        "checkin": "09:00 AM",
        "checkout": "05:00 PM",
        "total": "7h 50m",
      },
    ];

    String? selectedMonth;
    String? selectedYear;

    final List<String> months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];

    final List<String> years = List.generate(
      10,
      (index) => (2020 + index).toString(),
    );
    return SingleChildScrollView(
      child: Padding(
        padding: const EdgeInsets.all(16),
        child: Column(
          children: [
            const SizedBox(height: 16),

            Row(
              children: [
                _statCard(
                  "2",
                  "Leave",
                  Colors.blue,
                  onTap: () {
                    print("Leave diklik");
                    // Navigator.pushNamed(context, "/leave");
                  },
                ),
                _statCard(
                  "5",
                  "Reimbursement",
                  Colors.purple,
                  onTap: () {
                    print("Reimbursement diklik");
                    // Navigator.pushNamed(context, "/reimbursement");
                  },
                ),
              ],
            ),

            Row(
              children: [
                _statCard(
                  "Rp XXX,00",
                  "Wage",
                  Colors.red,
                  onTap: () {
                    print("Reimbursement diklik");
                    // Navigator.pushNamed(context, "/reimbursement");
                  },
                ),
              ],
            ),

            const SizedBox(height: 16),

            const Align(
              alignment: Alignment.centerLeft,
              child: Text(
                "Attendance History",
                style: TextStyle(fontSize: 18, fontWeight: FontWeight.bold),
              ),
            ),

            const SizedBox(height: 10),

            Row(
              children: [
                Expanded(
                  child: DropdownButtonFormField<String>(
                    value: selectedMonth,
                    decoration: InputDecoration(
                      labelText: "Month",
                      border: OutlineInputBorder(
                        borderRadius: BorderRadius.circular(8),
                      ),
                    ),
                    items: months.map((month) {
                      return DropdownMenuItem(value: month, child: Text(month));
                    }).toList(),
                    onChanged: (value) {
                      // setState(() {
                      //   selectedMonth = value;
                      // });
                    },
                  ),
                ),

                const SizedBox(width: 12), // jarak antar dropdown

                Expanded(
                  child: DropdownButtonFormField<String>(
                    value: selectedYear,
                    decoration: InputDecoration(
                      labelText: "Year",
                      border: OutlineInputBorder(
                        borderRadius: BorderRadius.circular(8),
                      ),
                    ),
                    items: years.map((year) {
                      return DropdownMenuItem(value: year, child: Text(year));
                    }).toList(),
                    onChanged: (value) {
                      // setState(() {
                      //   selectedYear = value;
                      // });
                    },
                  ),
                ),
              ],
            ),

            const SizedBox(height: 10),

            Card(
              shape: RoundedRectangleBorder(
                borderRadius: BorderRadius.circular(10),
              ),
              child: SizedBox(
                height: 300, // tinggi card supaya bisa discroll
                child: ListView.builder(
                  itemCount: attendanceData.length,
                  itemBuilder: (context, index) {
                    final data = attendanceData[index];

                    return _attendanceCard(
                      date: data["date"]!,
                      checkin: data["checkin"]!,
                      checkout: data["checkout"]!,
                      total: data["total"]!,
                    );
                  },
                ),
              ),
            ),
          ],
        ),
      ),
    );
  }

  Widget _statCard(
    String number,
    String title,
    Color color, {
    VoidCallback? onTap,
  }) {
    return Expanded(
      child: InkWell(
        onTap: onTap,
        borderRadius: BorderRadius.circular(10),
        child: Container(
          margin: const EdgeInsets.all(6),
          padding: const EdgeInsets.all(16),
          decoration: BoxDecoration(
            border: Border.all(color: color),
            borderRadius: BorderRadius.circular(10),
          ),
          child: Column(
            children: [
              Text(
                number,
                style: TextStyle(
                  fontSize: 20,
                  fontWeight: FontWeight.bold,
                  color: color,
                ),
              ),
              Text(title),
            ],
          ),
        ),
      ),
    );
  }

  Widget _attendanceCard({
    required String date,
    required String checkin,
    required String checkout,
    required String total,
  }) {
    return Card(
      child: ListTile(
        leading: CircleAvatar(child: Text(date.split(" ")[0])),
        title: Text(date),
        subtitle: Row(
          mainAxisAlignment: MainAxisAlignment.spaceBetween,
          children: [
            Text("Check in: $checkin"),
            Text("Check out: $checkout"),
            Text("Total: $total"),
          ],
        ),
      ),
    );
  }
}

class ScanQRPage extends StatelessWidget {
  const ScanQRPage({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text(
          "Scan QR Attendance",
          style: TextStyle(color: Colors.white),
        ),
        backgroundColor: Colors.pink,
      ),
      body: MobileScanner(
        onDetect: (capture) {
          final List<Barcode> barcodes = capture.barcodes;
          for (final barcode in barcodes) {
            final String? code = barcode.displayValue;

            if (code != null) {
              ScaffoldMessenger.of(
                context,
              ).showSnackBar(SnackBar(content: Text("QR Code: $code")));
            }
          }
        },
      ),
    );
  }
}
