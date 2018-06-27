package com.example.seow.myapplication;

import android.app.Activity;
import android.os.Bundle;
import android.view.View;
import android.widget.ArrayAdapter;
import android.widget.ListView;
import android.widget.Toast;

import java.util.ArrayList;
import java.util.List;

public class MainActivity extends Activity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        ArrayList<String> catList = new ArrayList<>();
        for (int i = 0; i < 20; i++)
            catList.add("Abteilung " + String.valueOf(i));

        findViewById(R.id.qr).setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                Toast.makeText(getBaseContext(),"Scan Barcode or QR-Code", Toast.LENGTH_SHORT).show();
            }
        });
        ((ListView) findViewById(R.id.list)).setAdapter(new ViewAdapter(catList, this));
    }
}
