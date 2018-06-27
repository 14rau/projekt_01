package com.example.seow.myapplication;

import android.content.Context;
import android.view.Gravity;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.ArrayAdapter;
import android.widget.BaseAdapter;
import android.widget.LinearLayout;
import android.widget.ListView;
import android.widget.TextView;

import java.util.ArrayList;
import java.util.List;

public class ViewAdapter extends BaseAdapter {

    private List<String> entries;
    private Context context;

    ViewAdapter(List<String> entries, Context context) {
        this.entries = entries;
        this.context = context;
    }

    @Override
    public int getCount() {
        return entries.size();
    }

    @Override
    public Object getItem(int position) {
        return entries.get(position);
    }

    @Override
    public long getItemId(int position) {
        return 0;
    }

    @Override
    public View getView(int position, View convertView, ViewGroup parent) {

        final View view = convertView == null ? createView(parent) : convertView;
        final ViewHolder viewHolder = (ViewHolder) view.getTag();

        String entry = entries.get(position);
        viewHolder.textView.setText(entry);

        return view;
    }

    private View createView(ViewGroup parent) {
        LayoutInflater layoutInflater = (LayoutInflater) context.getSystemService(Context.LAYOUT_INFLATER_SERVICE);
        if (layoutInflater == null)
            throw new NullPointerException("layoutInflater == null");
        final View view = layoutInflater.inflate(R.layout.fragment_products, parent, false);

        final ViewHolder viewHolder = new ViewHolder();

        viewHolder.textView = view.findViewById(R.id.tv);
        viewHolder.list = view.findViewById(R.id.list);

        ArrayList<String> productList = new ArrayList<>();
        for (int i = 1; i < 11; i++) {
            TextView tv = new TextView(context);
            tv.setTextSize(20);
            tv.setGravity(Gravity.CENTER_HORIZONTAL);
            tv.setLayoutParams(viewHolder.textView.getLayoutParams());
            tv.setText(String.format("     Produkt %s", String.valueOf(i)));
            viewHolder.list.addView(tv);

        }

        viewHolder.textView.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                viewHolder.list.setVisibility(viewHolder.list.getVisibility() == View.VISIBLE ? View.GONE : View.VISIBLE);
            }
        });

        view.setTag(viewHolder);

        return view;
    }

    private static class ViewHolder {
        TextView textView;
        LinearLayout list;
    }
}
