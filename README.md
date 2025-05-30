Fork  BSC แล้ว สร้างเป็น HEECHAIN  
โดยมีรายละเอียดดังนี้
1.Network : HEECHAIN
2.CHAIN ID : 4444
3.Native Token :  HEE
4.Symbol : HEE
5.Gas HEE
6.Cerrency : HEE
7.POA
8.POS
9.Add Metamask
10. HEE Supply : 4444444444
11. genesis.json
12. Peivate key : ac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80
วางแผนการทำงานพร้อมคำอธิบาย  


วิธีเพิ่ม HEECHAIN Network ใน Metamask
เปิด Metamask
คลิกที่ชื่อเครือข่ายด้านบน (เช่น "Ethereum Mainnet")
เลือก "Add network" หรือ "เพิ่มเครือข่าย"
เลือก "Add a network manually" หรือ "เพิ่มเครือข่ายด้วยตนเอง"
กรอกข้อมูลดังนี้
| ช่องกรอก | ค่า |
|-------------------------|--------------------------------------|
| Network Name | HEECHAIN |
| New RPC URL | http://localhost:8545 |
| Chain ID | 4444 |
| Currency Symbol | HEE |
| Block Explorer URL | (ใส่หรือไม่ใส่ก็ได้) เช่น http://localhost:4000 |
กด "Save" หรือ "บันทึก"
หลังจากนี้ Metamask จะเชื่อมต่อกับ HEECHAIN ที่รันอยู่ในเครื่องคุณทันที
ถ้าต้องการให้แสดง HEE Token ด้วย ให้ทำตามขั้นตอนที่ตอบไว้ก่อนหน้านี้ครับ
ถ้ามีปัญหาหรืออยากให้สร้างไฟล์ config สำหรับ import อัตโนมัติ แจ้งได้เลย!


# HEECHAIN

HEECHAIN เป็นบล็อกเชนที่ fork มาจาก BSC โดยมีการปรับแต่งดังนี้:

## คุณสมบัติหลัก
- Chain ID: 4444
- Native Token: HEE
- Total Supply: 4,444,444,444 HEE
- Consensus: POA/POS Hybrid

## การติดตั้ง

1. ติดตั้ง Go (เวอร์ชัน 1.16 หรือสูงกว่า)
2. Clone repository:
```bash
git clone https://github.com/your-username/heechain.git
cd heechain
```

3. ติดตั้ง dependencies:
```bash
go mod download
```

4. Build:
```bash
make all
```

## การรัน Node

1. สร้าง genesis block:
```bash
geth init genesis.json
```

2. รัน node:
```bash
geth --networkid 4444 --http --http.addr "0.0.0.0" --http.port 8545 --http.api "eth,net,web3,personal,debug" --http.corsdomain "*" --ws --ws.addr "0.0.0.0" --ws.port 8546 --ws.api "eth,net,web3,personal,debug" --ws.origins "*" --syncmode "full" --gcmode "archive" --allow-insecure-unlock
```



geth --datadir . --networkid 4444 --http --http.api eth,net,web3,personal --http.corsdomain "*" --http.port 8545 --unlock 0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266 --allow-insecure-unlock --mine --miner.etherbase 0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266 --password password.txt




## การเพิ่ม Network ใน Metamask

1. เปิด Metamask
2. คลิกที่ Network dropdown
3. เลือก "Add Network"
4. กรอกข้อมูลจากไฟล์ metamask-config.json

## Validator Setup

1. สร้าง account:
```bash
geth account new --datadir ./data
```

2. ใช้ private key ที่กำหนดไว้:
```
ac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80
```

## การพัฒนา

- ใช้ Solidity สำหรับเขียน Smart Contracts
- ใช้ Web3.js หรือ Ethers.js สำหรับการพัฒนา dApp